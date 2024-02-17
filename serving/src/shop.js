const express = require('express');
const productController = require('../controllers/productControllers');

const router = express.Router();

router.get('/', productController.getHomePageController);

router.get('/add-product', productController.getAddProductController);

router.post('/add-product', productController.postAddProductController);

router.get('/show-products', productController.getShowProductsController);

router.get('/contactus', productController.getContactUsController);

router.post('/success', productController.postSuccessController);

router.get('/get-products', productController.getProducts);

router.get('/get-product', productController.getProduct);

router.post('/post-product', productController.postProduct);

module.exports = router;