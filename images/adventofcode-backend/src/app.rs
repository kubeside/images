use std::sync::Arc;
use axum::extract::State;
use axum::http::{HeaderMap, HeaderValue};
use axum::Json;
use axum::routing::get;
use reqwest::header::{COOKIE, USER_AGENT};
use tokio::net::TcpListener;
use crate::error::APIError;
use crate::state::AppState;

pub(crate) async fn run() -> Result<(), AppRunError> {
    let listener = TcpListener::bind(("0.0.0.0", 8000)).await.map_err(AppRunError::BindError)?;

    let state = {
        let config = {
            let raw_config = tokio::fs::read_to_string("config.json").await?;
            serde_json::from_str(&raw_config)?
        };
        let http_client = {
            let mut headers = HeaderMap::new();
            let user_agent = "adventofcode-backend/1.0.0 (GitHub: https://github.com/kubeside/images)";
            headers.insert(USER_AGENT, HeaderValue::from_static(user_agent));
            reqwest::Client::builder()
                .default_headers(headers)
                .build()
                .expect("known to be good")
        };
        Arc::new(AppState {
            http_client,
            config
        })
    };


    let app = axum::Router::new()
        .route("/leaderboard/v1", get(get_leaderboard_v1))
        .with_state(state);

    axum::serve(listener, app).await.map_err(AppRunError::ServeError)?;

    Ok(())
}

#[derive(thiserror::Error, Debug)]
pub(crate) enum AppRunError {
    #[error("failed to bind")]
    BindError(std::io::Error),
    #[error("failed to serve")]
    ServeError(std::io::Error),
    #[error("failed to read config.json")]
    FailedToReadConfig(#[from] std::io::Error),
    #[error("invalid config")]
    InvalidConfig(#[from] serde_json::Error)
}

async fn get_leaderboard_v1(State(state): State<Arc<AppState>>) -> Result<Json<serde_json::Value>, APIError> {
    let url = format!("https://adventofcode.com/api/leaderboard/private/view/{}.json", state.config.leaderboard_id);
    state.http_client.get(url)
        .header(COOKIE, format!("session={}", state.config.session_token))
        .send()
        .await
        .ok()
        .ok_or(APIError::InvalidResponseFromAdventOfCode)?
        .error_for_status()
        .ok()
        .ok_or(APIError::InvalidResponseFromAdventOfCode)?
        .json()
        .await
        .ok()
        .ok_or(APIError::InvalidResponseFromAdventOfCode)
        .map(|response| Json(response))
}
