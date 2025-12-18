module.exports = {
  apps: [
    {
      name: 'wingateway-api',
      script: 'dist/main.js',
      watch: false,
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
