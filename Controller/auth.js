const configSecret = require('../Config/secret');
const conn = require('../Server/DB');
const jwt = require('jsonwebtoken');
const response = require('../res');
const mysql = require('mysql');
const md5 = require('md5');
const ip = require('ip');
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }

    var query = "SELECT username, email FROM ?? WHERE ??=? AND ??=?";
    var table = ["user", "username", post.username, "email", post.email]; //user is table name in database, username and email are property or column name in table in database

    query = mysql.format(query, table);

    try{
        await conn.query(query, async (error, rows) => {
            if(error){
                console.log(error);
            } else{
                if(rows.length === 0){
                    var insertQuery = "INSERT INTO ?? SET ?";
                    var table = ["user"];
                    var addQuery = mysql.format(insertQuery, table);
                    try{
                        await conn.query(addQuery, post, (err, rows) =>{
                            if(error){
                                return response.ok('500', err.message, res);
                            } else{
                                return response.ok('200', 'Data berhasil ditambahkansue!', res);
                            }
                        });
                    } catch(err){
                        return response.ok('500', err.message, res);
                    }
                } else{
                    return response.ok('400', 'Email sudah terdaftar!', res);
                }
            }
        });
    } catch(err){
        return response.ok('500', err.message, res);
    }
});

module.exports = router;