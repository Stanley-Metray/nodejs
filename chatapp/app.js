const express = require('express');
const chatRouter = require('./src/chat');
const path = require('path');
const bodyParser = require('body-parser');


console.clear();
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(chatRouter);
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(path.join(__dirname, "public")));


app.listen(3000);


