const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('error', function(err){
    console.log('couldnt connect the database!');
    console.log(err.message);
});

module.exports = {
    pool,
    query: pool.query
}
