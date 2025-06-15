#!/bin/sh
python3 download.py
mount -t tmpfs ext4 /opt/http-cache/ram-cache
nginx
