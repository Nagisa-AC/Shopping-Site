const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controller/products');


// Shopping site routes
router.get('/', productController.getProducts);

// Exporting router
module.exports = router;