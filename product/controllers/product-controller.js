const path = require('path');
const Product = require('../models/product');

const product = new Product();

product.connect();

module.exports.getHome = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "index.html"));
}

module.exports.getAddProduct = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "product-form.html"));
}

module.exports.postAddProduct = async(req,res)=>{
   try {
    const result = await product.addProduct(req.body);
    res.send("Product Addedd");
   } catch (error) {
        console.log(error);
   }
}

module.exports.getDeleteProduct = (req,res)=>{
    res.sendFile(path.join(__dirname, "../views", "delete-product.html"));
}

module.exports.postDeleteProduct = async (req,res)=>{
    try {
        const result = await product.deleteProduct(req.body.title);
        res.send("Product Deleted");
       } catch (error) {
            console.log(error);
       }
}