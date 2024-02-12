const express = require('express');
const app = express();

app.use((req,res, next)=>{
    console.log("In first middleware");
    next();
})

app.use((req, res)=>{
    console.log("In second middleware");
    res.send('<h1>Welcome to express app</h1>');
});


app.listen(3000);