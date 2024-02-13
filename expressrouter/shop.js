const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.send(`<h1>Welcome to express router</h1>
        <br><a href='/add-product'>Add Product</a>
    `);
});

module.exports = router;