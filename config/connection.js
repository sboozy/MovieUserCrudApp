//bring in pg-promise
const pgp = require('pg-promise')();

//bring in object from config
const config = require('./dbConfig');

//connect to database
// const db = pgp(config)

function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp(config);
    } else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
}

const db = setDatabase();

module.exports = db;
