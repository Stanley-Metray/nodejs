const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../', "views", "shop.html"));
});

router.get('/add-product', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post('/add-product', (req, res)=>{
    res.redirect('/');
});

router.get('/show-products', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "products.html"));
});

router.get('/contactus', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "contactus.html"));
});

router.post('/success', (req,res)=>{
    res.send("<h1>Login Successful</h1>");
});


module.exports = router;