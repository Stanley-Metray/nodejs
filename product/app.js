// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-routes');
const cartRouter = require('./routes/cart-router');
const { sequelize } = require('./connection/database');
const { Product } = require('./models/product');
const { User } = require('./models/user');
const { Cart } = require('./models/cart');

const app = express();
console.clear();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(productRouter);
app.use(userRouter);
app.use(cartRouter);

Product.hasOne(User, { onDelete: 'CASCADE' });
Product.belongsTo(User, { onDelete: 'CASCADE' });
User.hasOne(Cart);
Product.belongsToMany(Cart, { through: Cart });
Cart.belongsToMany(Product, { through: Cart });

sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        app.listen(3000);
    })
    .catch((err) => {
        console.error('Error synchronizing database:', err);
    });
