const express = require('express');
const path = require('path');
const chatRouter = require('./src/chat');

const app = express();

app.use(express.static(`./node_modules/bootstrap/dist`));
app.use(express.static(path.join(__dirname, "public")));
app.use(chatRouter);

app.listen(3000);

