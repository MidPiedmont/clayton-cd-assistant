// dbConfig-empty.js
// This file is used to configure the database connection for the application.
// It is intentionally left empty for security reasons and should not contain sensitive information.
// Copy to dbConfig.js and fill in the necessary details.

const mariadb = require('mariadb/callback');
const fs = require('node:fs');

const pool = mariadb.createPool({
    database: '',
    host: '',
    port: 6033,
    ssl: {
        ca: fs.readFileSync(''),
    },
    user: '',
    password: '',
    charset: 'utf8mb4',
    connectionLimit: 3
});

// Export the pool to be used in other modules
module.exports = pool;
