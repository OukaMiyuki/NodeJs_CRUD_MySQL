'use strict';
const response = require('../res');
const conn = require('../Server/DB');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    response.ok("Aplikasi Berjalan!", res)
});

router.get('/show_data', async (req, res) => {
    try{
        await conn.query('SELECT * FROM mahasiswa', (err, rows, fields) =>{
            if(err){
                return response.ok('500', err.message, res);
            } else{
                return response.ok('200',rows, res);
            }
        });
    } catch(err){
        return response.ok('500', err.message, res);
    }
});

router.get('/show_data/profile/:id', async (req, res) => {
    let idMahasiswa = req.params.id;
    try{
        await conn.query('SELECT * FROM mahasiswa WHERE nim = ?', [idMahasiswa], (err, rows, fields) =>{
            if(err){
                return response.ok('500', err.message, res);
            } else{
                return response.ok('200',rows, res);
            }
        });
    } catch(err){
        return response.ok('500', err.message, res);
    }
});

router.post('/tambah', async (req, res) => {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    try{
        await conn.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)',
            [nim, nama, jurusan], (err, rows, fields) => {
                if(err){
                    return response.ok('500', err.message, res);
                } else{
                    return response.ok('200', 'Data berhasil ditambahkan!', res)
                }
            }
        );
    }catch(err){
        return response.ok('500', err.message, res);
    }
});

router.put('/edit/:id', async (req, res) => {
    var nim = req.params.id;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    try{
        await conn.query('UPDATE mahasiswa SET nama=?, jurusan=? WHERE nim=?',
            [nama, jurusan, nim], (err, rows, fields) => {
                if(err){
                    return response.ok('500', err.message, res);
                } else{
                    return response.ok('200', 'Data berhasil diedit!', res)
                }
            }
        );
    } catch(err){
        return response.ok('500', err.message, res);
    }
});

router.delete('/hapus/:id', async (req, res) => {
    var nim = req.params.id;
    try{
        await conn.query('DELETE FROM mahasiswa WHERE nim=?', [nim], 
        (err, rows, fields) => {
                if(err){
                    return response.ok('500', err.message, res);
                } else{
                    return response.ok('200', 'Data berhasil dihapus!', res)
                }
            }
        );
    } catch(err){
        return response.ok('500', err.message, res);
    }
});

module.exports = router;