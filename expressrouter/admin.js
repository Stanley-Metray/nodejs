const express = require('express');

const router = express.Router();

router.get('/add-product', (req,res)=>{
    res.send(`<form action='/add-product' method='post'>
        <input placeholder='Name' type='text' name='title'><br><br>
        <input placeholder='Size' type='text' name='size'><br><br>
        <button>Submit</button>
    </form>`);
});


router.post('/add-product', (req,res)=>{
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;