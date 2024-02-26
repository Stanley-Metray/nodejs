const express = require('express');
const bodyParser = require('body-parser');
const appointmentRouter = require('./src/appointment');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(path.join(__dirname, "public")));
app.use(appointmentRouter);

app.listen(3000);