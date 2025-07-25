module.exports = {
    apps : [{
        name: "cda-client",
        script: "serve --spa --port 3000 build/",
        cwd: './elcamino/client',
        watch: true,
        // env: {
        //     PM2_SERVE_PATH: '.',
        //     PM2_SERVE_PORT: 3000,
        // }
      }, {
        name: "cda-api",
        script: "./index.js",
        cwd: "./elcamino/server",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
}