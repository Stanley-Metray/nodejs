const express = require('express');
const cartController = require('../controllers/cart-controller');

const router = express.Router();


router.get('/cart', cartController.getCart);

router.post('/add-to-cart', cartController.postAddToCart);

router.get('/get-cart-items', cartController.getCartItems);

router.post('/remove-cart', cartController.removeCart);

module.exports =  router;