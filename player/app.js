const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {sequelize} = require('./connection/database');
const playerRouter = require('./routers/player-router');

console.clear();
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(path.join(__dirname, "./public")));
app.use(playerRouter);

sequelize.sync()
.then(()=>{
    console.log("Database Synchronized");
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
});
