const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/product-router');

const app = express();
console.clear();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(router);

app.listen(3000);