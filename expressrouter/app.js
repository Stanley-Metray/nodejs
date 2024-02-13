const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./admin');
const shopRouter = require('./shop');

const app = express();

app.use(bodyParser.urlencoded({'extended':false}));
app.use(shopRouter);
app.use(adminRouter);

app.get('*',(req,res)=> {
    res.status(404).send('<h1>Page Not Found</h1>');
});


app.listen(3000);

