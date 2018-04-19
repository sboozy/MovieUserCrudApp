//bring in pg-promise
const pgp = require('pg-promise')();

//bring in object from config
const config = require('./dbConfig');

//connect to database
const db = pgp(config)

module.exports = db;
