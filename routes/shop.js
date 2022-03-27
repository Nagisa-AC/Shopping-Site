const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const productController = require('../controller/products');

// Shopping site routes
router.get('/', productController.getHomePage);

// Exporting router
module.exports = router;