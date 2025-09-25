FROM rust:1.90.0-slim-bullseye AS builder
WORKDIR /opt/aoc/build

RUN apt-get update
RUN apt-get install -y libssl-dev pkg-config

COPY . ./

# This is in the same command because of the cache
RUN \
    --mount=type=cache,target=/tmp/kalkan-build/target \
    --mount=type=cache,target=/usr/local/cargo/registry \
    --mount=type=cache,target=/root/.cargo \
     cargo build --release && \
     cp target/release/adventofcode-backend /opt/aoc/backend

FROM debian:bullseye-slim
WORKDIR /opt/aoc
RUN apt-get update
RUN apt-get install -y ca-certificates
COPY --from=builder /opt/aoc/backend /opt/aoc/backend
CMD ["/opt/aoc/backend"]
