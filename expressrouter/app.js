const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./admin');
const shopRouter = require('./shop');

const app = express();

app.use(bodyParser.urlencoded({'extended':false}));
app.use(shopRouter);
app.use(adminRouter);

app.listen(3000);

