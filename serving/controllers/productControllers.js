const path = require('path');
const Product = require("../models/products");

module.exports.getHomePageController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', "views", "shop.html"));
};

module.exports.getAddProductController = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
}

module.exports.postAddProductController = (req, res) => {
    const product = new Product(Math.random().toString(), req.body.product);
    product.save();
    res.redirect('/');
};

module.exports.getShowProductsController = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};

module.exports.getContactUsController = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "contactus.html"));
};

module.exports.postSuccessController = (req, res) => {
    res.send("<h1>Login Successful</h1>");
};

module.exports.getProducts = (req, res) => {
    res.send(Product.getAllProducts());
}

module.exports.getProduct = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "get-product.html"));
};


module.exports.postProduct = (req, res) => {
    const id = req.body.product;
    const edit = req.body.edit;
    const del = req.body.delete;
    if (!edit && !del) {
        const product = Product.getProduct(id);
        res.send(product);
    }
    if(edit) {
        const product = Product.getProduct(id);
        console.log(product[0].title)
        res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Edit-Product</title>
            <link rel="stylesheet" href="/css/style.css">
        </head>
        
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/show-products">Show All Products</a></li>
                        <li><a href="/add-product">Add Product</a></li>
                        <li><a href="/get-product">Get Product</a></li>
                        <li><a href="/edit-product">Edit Product</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        
            <main>
                <form method="post" action="/update-product" id="edit-form">
                    <input type="text" name="product" placeholder="Product Id" value=${product[0].title}> <br>
                    <input type="hidden" value=${product[0].id} name="id">
                    <button type="submit">Update</button>
                </form>
            </main>
        </body>
        
        </html>`);
    }
    if(del)
    {
        const product = Product.getProduct(id);
        console.log(product[0].title)
        res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Edit-Product</title>
            <link rel="stylesheet" href="/css/style.css">
        </head>
        
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/show-products">Show All Products</a></li>
                        <li><a href="/add-product">Add Product</a></li>
                        <li><a href="/get-product">Get Product</a></li>
                        <li><a href="/edit-product">Edit Product</a></li>
                        <li><a href="/contactus">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        
            <main>
                <form method="post" action="/delete-product" id="edit-form">
                    <input type="text" name="product" placeholder="Product Id" value=${product[0].title}> <br>
                    <input type="hidden" value=${product[0].id} name="id">
                    <button type="submit">Delete</button>
                </form>
            </main>
        </body>
        
        </html>`
    )}

};

module.exports.getEditProduct = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "edit-prodct-form.html"));
}


module.exports.updateProduct = (req,res)=>{
    Product.updateProduct(req.body.id, req.body.product);
    res.redirect('/');
}


module.exports.getDelete = (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "delete-product-form.html"));
}


module.exports.postDeleteProduct=(req,res)=>{
    Product.deleteProduct(req.body.id, req.body.product);
    res.redirect('/');
}