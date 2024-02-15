const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const webControllers = require('./controllers/webControllers');
const shopRouter = require('./src/shop');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRouter);
app.use("*", webControllers.getErrorPageController);

app.listen(3000);