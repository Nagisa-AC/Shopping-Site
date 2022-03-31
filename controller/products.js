const express = require('express');
const Product = require('../models/product');

// Admin add product page
exports.getAddProductsPage = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle : 'Add Product', 
        path : '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

// Admin add product page --> POST request
exports.postAddProductsPage = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

// Home page 
exports.getProducts = (req, res, next) => {
    Product.fetchProds((products) => {
        res.render('shop/product-list', { 
            pageTitle : 'Shop', 
            prods : products, 
            pageTitle : 'Shop', 
            path : '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};