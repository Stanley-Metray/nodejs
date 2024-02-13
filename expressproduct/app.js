const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.send('<a href="/add-product">Add Product</a>');
});

app.get('/add-product', (req,res)=>{
    res.send(`<form action='/add-product' method='post'>
            <input placeholder='Name' type='text' name='title'><br><br>
            <input placeholder='Size' type='text' name='size'><br>
            <button type='submit'>Submit</button>
    </form>`);
});


app.post('/add-product', (req,res)=>{
    let productName = req.body.title;
    let size = req.body.size;

    console.log(productName, size);
    res.redirect('/');
});

app.listen(3000);