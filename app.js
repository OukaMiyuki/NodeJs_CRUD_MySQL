const express = require('express');
const app = express(); //global function to call expressjs
require('./Web/Routes')(app);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});