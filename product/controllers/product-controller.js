const path = require('path');
const {Product} = require('../models/product');

module.exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "index.html"));
}

module.exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "product-form.html"));
}

module.exports.postAddProduct = async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body);
        console.log(createdProduct);
        res.send("Product Addedd");
    } catch (error) {
        console.log(error);
    }
}

// const updateQuantity = async()

module.exports.getDeleteProduct = (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "delete-product.html"));
}

module.exports.postDeleteProduct = async (req, res) => {
    try {

        const deletedProduct = await Product.destroy({
            where:{
                title : req.body.title
            }
        });
        if(deletedProduct)
            res.send(200, deletedProduct);
        else
            res.send(404, "Product Not Found!");
    } catch (error) {
        console.log(error);
    }
}

module.exports.getAllProducts = async(req, res)=>{
    try {
        const products = await Product.findAll();
        if(products)
            res.send(products);
        else
            res.send("No Products Found!");        
    } catch (error) {
        console.log(error);
    }
}

module.exports.getProduct = async(req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "find-product-form.html"));
}

module.exports.postGetProduct = async(req, res)=>{
    try {
        const product = await Product.findOne({
            where : {
                title : req.body.title
            }
        });
        if(product)
            res.send(product);
        else
            res.send("Product Not Found!");
    } catch (error) {
        console.log(error);
    }
}
