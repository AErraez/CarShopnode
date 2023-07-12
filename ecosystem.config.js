module.exports = {
    apps: [
      {
        name: 'client',
        script: 'client.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          PORT: 3002, // Change the port number as needed
        },
      },
      {
        name: 'admin',
        script: 'admin.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          PORT: 3001, // Change the port number as needed
        },
      },
      {
        name: 'api',
        script: 'api.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          PORT: 3003, // Change the port number as needed
        },
      },
    ],
  };
  