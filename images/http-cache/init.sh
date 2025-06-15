#!/bin/sh
/opt/http-cache/download.py
mount -t tmpfs ext4 /opt/http-cache/ram-cache
nginx
