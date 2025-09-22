mod app;
mod error;
mod state;
mod config;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    if let Err(error) = app::run().await {
        tracing::error!(?error, "failed to run app");
    }
}
