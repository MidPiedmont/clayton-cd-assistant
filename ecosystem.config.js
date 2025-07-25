module.exports = {
    apps : [{
        name: "cda-client",
        script: "serve --spa --port 3000 build/",
        cwd: './cda/client',
        watch: true,
        // env: {
        //     PM2_SERVE_PATH: '.',
        //     PM2_SERVE_PORT: 3000,
        // }
      }, {
        name: "cda-api",
        script: "./index.js",
        cwd: "./cda/server",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
}