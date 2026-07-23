#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/home/ronaldoleaonutri/htdocs/ronaldoleaonutri.online}"
APP_PM2_NAME="${APP_PM2_NAME:-ronaldoleaonutri}"

cd "$APP_DIR"

mkdir -p logs storage uploads

npm ci
npm run build:vps

if pm2 describe "$APP_PM2_NAME" >/dev/null 2>&1; then
  pm2 reload "$APP_PM2_NAME" --update-env
else
  pm2 start ecosystem.config.cjs --only "$APP_PM2_NAME"
fi

pm2 save
