#!/usr/bin/env python3
from pathlib import Path
import json
from typing
import subprocess

ROOT_PATH = Path("/opt/http-cache")
RAM_CACHE_PATH = ROOT_PATH / "ram-cache"
PERSISTENT_CACHE_PATH = ROOT_PATH / "persistent-cache"
CONFIG_PATH = ROOT_PATH / "config.json"

class CacheTarget(typing.TypedDict):
    url: str
    file_name: str
class HttpCacheConfig(typing.TypedDict):
    cache_targets: list[CacheTarget]

def main() -> None:
    with CONFIG_PATH.open() as f:
        config = json.load(f)
        config: HttpCacheConfig = config # type: ignore # We don't have a validation library so this is best I can do.

    for cache_target in config["cache_targets"]:
        download_target(cache_target)

def download_target(cache_target: CacheTarget) -> None:
    # Yes there is a security issue here allowing you to provide arbitrary options to wget
    # but it's gonna be fine as this is only admin-provided.
    subprocess.call(["wget", "--no-clobber", cache_target["url"], "-O", file_name)

main()
