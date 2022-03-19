const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

// Shopping site routes
router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods : products, docTitle : 'Shop'});
});

// Exporting router
module.exports = router;

