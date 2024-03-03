const express = require('express');
const productController = require('../controllers/product-controller');

const router = express.Router();


router.get('/', productController.getHome);

router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

router.get('/delete-product', productController.getDeleteProduct);

router.post('/delete-product', productController.postDeleteProduct);

router.get('/get-all-products', productController.getAllProducts);

router.get('/get-product', productController.getProduct);

router.post('/get-product', productController.postGetProduct);

module.exports =  router;