'use strict';

const response = require('../res');
const conn = require('../Server/DB');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    response.ok("Aplikasi Berjalan!", res)
});

router.get('/show_data', async (req, res) => {
    await conn.query('SELECT * FROM mahasiswa', (err, rows, fields) =>{
        if(err){
            console.log(err);
        } else{
            response.ok(rows, res);
        }
    });
});

router.get('/show_data/profile/:id', async (req, res) => {
    let idMahasiswa = req.params.id;
    await conn.query('SELECT * FROM mahasiswa WHERE nim = ?', [idMahasiswa], (err, rows, fields) =>{
        if(err){
            console.log(err);
        } else{
            response.ok(rows, res);
        }
    });
});

module.exports = router;