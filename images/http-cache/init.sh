#!/usr/bin/env bash
set -e
/opt/http-cache/download.py
mount -t tmpfs ext4 /opt/http-cache/ram-cache
nginx
