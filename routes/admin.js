const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const productController = require('../controller/products');

// Admin routes
router.get('/add-product', productController.getAddProductsPage);
router.post('/add-product', productController.postAddProductsPage);

// Exporting router
module.exports = router;