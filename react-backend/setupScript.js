require('dotenv').config();
const db = require('./db');
const bcrypt = require('bcrypt');

const users = [
    {
        mail : "service1@mail.ru",
        password : "123456"
    },
    {
        mail : "service2@mail.ru",
        password : "654321"
    }
]

async function setupUsersTable(){
    try{
        console.log("dropping table!");
        await db.pool.query(`DROP TABLE IF EXISTS ${process.env.DB_USERS_TABLE}`);
        console.log("creating table!");
        await db.pool.query(`CREATE TABLE ${process.env.DB_USERS_TABLE}(
            "id" bigserial PRIMARY KEY,
            mail char(255) UNIQUE,
            password char(60) NOT NULL
        )`);
        console.log("initialization!");
        for(var user of users)
        {
            const saltRounds = 10;
            const passwordHash = bcrypt.hashSync(user.password, saltRounds);
            const res = await db.pool.query(`INSERT INTO ${process.env.DB_USERS_TABLE}(mail, password) VALUES($1, $2) RETURNING *`, [
                user.mail,
                passwordHash
            ]);
            console.log(res.rows)
        }
        console.log("initializaiton done!");
        await db.pool.end();
    }
    catch(e){
        console.log(e.message);
        await db.pool.end();
    }   
}

setupUsersTable();
