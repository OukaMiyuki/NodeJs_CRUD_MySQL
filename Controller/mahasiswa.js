'use strict';

const response = require('../res');
const connection = require('../Server/DB');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    response.ok("Aplikasi Berjalan!", res)
});

module.exports = router;