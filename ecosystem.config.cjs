module.exports = {
  apps: [
    {
      name: process.env.APP_PM2_NAME || "ronaldoleaonutri",
      script: ".output/server/index.mjs",
      cwd: process.env.APP_DIR || process.cwd(),
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || "3071",
        HOST: process.env.HOST || "127.0.0.1",
        VITE_SITE_URL:
          process.env.VITE_SITE_URL || "https://ronaldoleaonutri.online",
      },
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
