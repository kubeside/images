use crate::config::AppConfig;

pub(crate) struct AppState {
    pub(crate) http_client: reqwest::Client,
    pub(crate) config: AppConfig
}
