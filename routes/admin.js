const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const productController = require('../controller/products');

// Storing admin entered products
const products = [];

// Admin routes
router.get('/add-product', productController.getAddProductsPage);
router.post('/add-product', productController.getPostAddProducts);

// Exporting router function
exports.routes = router;
exports.products = products;