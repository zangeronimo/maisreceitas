module.exports = {
  apps: [
    {
      name: "maisreceitas",
      script: "yarn",
      args: "start",
      cwd: "/home/maisreceitas/maisreceitas",
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        API_URL: "maisreceitas.com.br:3000",
        PORT: 3000,
      },
    },
  ],
};
