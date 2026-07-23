# Deploy VPS - ronaldoleaonutri.online

Aplicacao TanStack Start/Nitro preparada para rodar em VPS com Node.js, PM2 e proxy reverso pelo painel/Nginx.

## Variaveis principais

Copie `.env.example` para `.env` e preencha valores sensiveis apenas no ambiente local/servidor.

- `PORT=3071`
- `HOST=127.0.0.1`
- `NITRO_PRESET=node-server`
- `VITE_SITE_URL=https://ronaldoleaonutri.online`
- `APP_DIR=/home/ronaldoleaonutri/htdocs/ronaldoleaonutri.online`
- `APP_PM2_NAME=ronaldoleaonutri`

## Build local

```bash
npm ci
npm run build:vps
```

## Rota de validacao

Depois de iniciar a aplicacao, valide localmente na VPS:

```bash
curl -i http://127.0.0.1:3071/health
```

A resposta esperada contem:

```json
{"ok":true,"app":"ronaldoleaonutri","status":"ready"}
```

## Start em producao

```bash
mkdir -p logs storage uploads
pm2 start ecosystem.config.cjs --only ronaldoleaonutri
pm2 save
```

## Deploys futuros

Depois que os arquivos estiverem no diretorio do projeto na VPS:

```bash
bash scripts/deploy-vps.sh
```

## Proxy reverso

Configure somente o dominio `ronaldoleaonutri.online` para apontar para:

```text
http://127.0.0.1:3071
```

Use `scripts/nginx-cloudpanel-location.conf.example` como referencia para o vhost do CloudPanel.

Nao use comandos globais como `pm2 restart all`.
