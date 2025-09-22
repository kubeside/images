use serde::Deserialize;
#[derive(Deserialize, Debug, Clone)]
pub(crate) struct AppConfig {
    pub(crate) leaderboard_id: u32,
    pub(crate) session_token: String
    
}
