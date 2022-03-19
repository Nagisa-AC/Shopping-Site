const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

// Storing admin entered products
const products = [];

// Admin routes
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle : 'Add Product'});
});


router.post('/add-product', (req, res, next) => {
    products.push({ title : req.body.title });
    console.log(products);
    res.redirect('/');
});


// Exporting router function
exports.routes = router;
exports.products = products;