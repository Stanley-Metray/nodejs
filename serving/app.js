const express = require('express');
const shopRouter = require('./src/shop');
const bodyParser = require('body-parser');
const path = require('path');
console.clear();
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(shopRouter);

app.use("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./", "views", "error.html"));
});

app.listen(3000);