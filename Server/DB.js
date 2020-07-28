const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbcrud'
});

conn.connect( err => {
    if(err) throw new Error('Ann error occured couldn\'t connect to database ', err);
    console.log('Connected to database!');
});

module.exports = conn;