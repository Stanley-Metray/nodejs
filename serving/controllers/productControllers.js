const path = require('path');

const products = new Array();

module.exports.getHomePageController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', "views", "shop.html"));
};

module.exports.getAddProductController = (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
}

module.exports.postAddProductController = (req, res)=>{
    products.push(req.body.product);
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
    res.send(products);
}

