#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${APP_NAME:-ronaldoleaonutri}"
DOMAIN="${APP_DOMAIN:-ronaldoleaonutri.online}"
SITE_USER="${APP_SITE_USER:-ronaldoleaonutri}"
APP_PORT="${PORT:-3071}"
HOST_BIND="${HOST:-127.0.0.1}"
NODE_VERSION="${NODE_VERSION:-22}"
PM2_NAME="${APP_PM2_NAME:-ronaldoleaonutri}"
REPO_URL="${REPO_URL:-https://github.com/marceloohenr/ronaldo-leao-premium-landing.git}"
BRANCH="${BRANCH:-main}"
APP_DIR="${APP_DIR:-/home/${SITE_USER}/htdocs/${DOMAIN}}"

if [ "$(id -u)" -ne 0 ]; then
  echo "Execute este script como root."
  exit 1
fi

echo "== Auditoria inicial =="
echo "Usuario: $(whoami)"
echo "Host: $(hostname)"
echo "Dominio: ${DOMAIN}"
echo "Diretorio: ${APP_DIR}"
echo "Porta app: ${APP_PORT}"
echo

echo "== Dependencias basicas =="
apt-get update
apt-get install -y git curl ca-certificates

if ! command -v clpctl >/dev/null 2>&1; then
  echo "clpctl nao encontrado. Confirme se esta VPS usa CloudPanel."
  exit 1
fi

if [ ! -d "/home/${SITE_USER}" ] || [ ! -d "${APP_DIR}" ]; then
  echo "== Criando site Node.js no CloudPanel =="
  read -r -s -p "Digite uma senha para o usuario do site ${SITE_USER}: " SITE_USER_PASSWORD
  echo
  clpctl site:add:nodejs \
    --domainName="${DOMAIN}" \
    --nodejsVersion="${NODE_VERSION}" \
    --appPort="${APP_PORT}" \
    --siteUser="${SITE_USER}" \
    --siteUserPassword="${SITE_USER_PASSWORD}"
else
  echo "== Site/diretorio ja existe. Seguindo sem recriar =="
fi

mkdir -p "${APP_DIR}"
chown -R "${SITE_USER}:${SITE_USER}" "/home/${SITE_USER}"

if [ -d "${APP_DIR}/.git" ]; then
  echo "== Atualizando repositorio existente =="
  su - "${SITE_USER}" -c "cd '${APP_DIR}' && git fetch origin '${BRANCH}' && git reset --hard 'origin/${BRANCH}'"
else
  if [ -n "$(find "${APP_DIR}" -mindepth 1 -maxdepth 1 -print -quit)" ]; then
    BACKUP_DIR="${APP_DIR}.backup.$(date +%Y%m%d%H%M%S)"
    echo "== Movendo conteudo antigo deste dominio para ${BACKUP_DIR} =="
    mkdir -p "${BACKUP_DIR}"
    shopt -s dotglob nullglob
    mv "${APP_DIR}"/* "${BACKUP_DIR}/"
    shopt -u dotglob nullglob
  fi
  echo "== Clonando repositorio =="
  su - "${SITE_USER}" -c "git clone --branch '${BRANCH}' '${REPO_URL}' '${APP_DIR}'"
fi

cat > "${APP_DIR}/.env" <<ENV
NODE_ENV=production
PORT=${APP_PORT}
HOST=${HOST_BIND}
NITRO_PRESET=node-server
VITE_SITE_URL=https://${DOMAIN}

APP_NAME=${APP_NAME}
APP_DOMAIN=${DOMAIN}
APP_DIR=${APP_DIR}
APP_PM2_NAME=${PM2_NAME}
ENV

chown "${SITE_USER}:${SITE_USER}" "${APP_DIR}/.env"
chmod 600 "${APP_DIR}/.env"

mkdir -p "${APP_DIR}/logs" "${APP_DIR}/storage" "${APP_DIR}/uploads"
chown -R "${SITE_USER}:${SITE_USER}" "${APP_DIR}"

echo "== Instalando Node, dependencias, build e PM2 =="
su - "${SITE_USER}" <<SITE_COMMANDS
set -euo pipefail
export NVM_DIR="\$HOME/.nvm"
if [ ! -s "\$NVM_DIR/nvm.sh" ]; then
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
fi
. "\$NVM_DIR/nvm.sh"
nvm install ${NODE_VERSION}
nvm use ${NODE_VERSION}
cd "${APP_DIR}"
npm ci
npm run build:vps
npm install -g pm2
if pm2 describe "${PM2_NAME}" >/dev/null 2>&1; then
  pm2 reload "${PM2_NAME}" --update-env
else
  pm2 start ecosystem.config.cjs --only "${PM2_NAME}"
fi
pm2 save
SITE_COMMANDS

NODE_BIN="$(su - "${SITE_USER}" -c "export NVM_DIR=\"\$HOME/.nvm\"; . \"\$NVM_DIR/nvm.sh\"; nvm which ${NODE_VERSION}")"
NODE_DIR="$(dirname "${NODE_BIN}")"
env PATH="${PATH}:${NODE_DIR}" "${NODE_DIR}/pm2" startup systemd -u "${SITE_USER}" --hp "/home/${SITE_USER}" || true

echo "== SSL Let's Encrypt =="
clpctl lets-encrypt:install:certificate --domainName="${DOMAIN}" || true

echo "== Validacao =="
curl -i "http://${HOST_BIND}:${APP_PORT}/health" || true
echo
curl -k -i "https://${DOMAIN}/health" || true
echo

echo "Deploy finalizado para ${DOMAIN}."
