module.exports = {
  apps: [
    {
      name: 'wingateway-api-dev',
      script: 'src/main.ts',
      interpreter: 'ts-node',
      watch: true,
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
