const mysql = require('mysql');
// const mysqlConfig = require('./config.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'student',
    database: 'bestbnb'
});

module.exports = connection;