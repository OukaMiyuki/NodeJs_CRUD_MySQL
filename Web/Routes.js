const express = require('express');
const bodyParser = require('body-parser');
const mahasiswa = require('../Controller/mahasiswa');

module.exports = function(app){
    app.use(bodyParser.urlencoded( { extended: true } ));
    app.use(bodyParser.json());

    app.use('/api/mahasiswa', mahasiswa);
}