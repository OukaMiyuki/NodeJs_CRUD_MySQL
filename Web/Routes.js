const express = require('express');
const bodyParser = require('body-parser');
const mahasiswa = require('../Controller/mahasiswa');
const auth = require('../Controller/auth');

module.exports = function(app){
    app.use(bodyParser.urlencoded( { extended: true } ));
    app.use(bodyParser.json());

    app.use('/api/mahasiswa', mahasiswa);
    app.use('/api/user', auth);
}