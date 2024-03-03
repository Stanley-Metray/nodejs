const path = require('path');
const {Cart} = require('../models/cart');

module.exports.getCart = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "cart.html"));
}

module.exports.postAddToCart = async(req,res)=>{
    try {
        const createdCart = await Cart.create(req.body);
        if(createdCart)
            res.send(200, "Item Added To Cart");
        else
            res.send(500, "Internal Server Error!");

    } catch (error) {
        console.log(error);
    }
}

module.exports.getCartItems = async(req,res)=>{
    try {
        const cartItems = await Cart.findAll();
        res.send(cartItems);
    } catch (error) {
        console.log(error);
    }
}


module.exports.removeCart = async(req,res)=>{
    try {
        const removedCart = await Cart.destroy({
            where : {
                UserId : req.body.userId
            }
        });

        if(removedCart)
            res.send(200, "Cart Removed");
        else
            res.send(500, "Internal Server Error");

    } catch (error) {
        console.log(error);
    }
}