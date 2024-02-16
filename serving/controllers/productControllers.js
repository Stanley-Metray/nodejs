const path = require('path');
const Product = require("../models/products");

module.exports.getHomePageController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', "views", "shop.html"));
};

module.exports.getAddProductController = (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
}

module.exports.postAddProductController = (req, res)=>{
    const product = new Product(Math.random().toString(), req.body.product);
    product.save();
    res.redirect('/');
};

module.exports.getShowProductsController = (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};

module.exports.getContactUsController = (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "contactus.html"));
};

module.exports.postSuccessController = (req,res)=>{
    res.send("<h1>Login Successful</h1>");
};

module.exports.getProducts = (req,res)=>{
    res.send(Product.getAllProducts());
}

module.exports.getProduct = (req, res) => {
    const id = req.params.productId; 
    const product = Product.getProduct(id);
    res.send(product);
};

