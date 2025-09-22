use axum::http::StatusCode as HttpStatusCode;
use axum::response::{IntoResponse as IntoHttpResponse, Response as HttpResponse};
use axum::body::Body as HttpBody;


#[derive(thiserror::Error, Debug)]
pub(crate) enum APIError {
    #[error("invalid json")]
    InvalidResponseFromAdventOfCode
}
impl APIError {
    fn status_code(&self) -> HttpStatusCode {
        match self {
            Self::InvalidResponseFromAdventOfCode => HttpStatusCode::INTERNAL_SERVER_ERROR
        }
    }
}
impl IntoHttpResponse for APIError {
    fn into_response(self) -> HttpResponse<HttpBody> {
        HttpResponse::builder()
            .status(self.status_code())
            .body(HttpBody::empty())
            .expect("known to be good in advance")
    }
}
