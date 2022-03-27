// Dependency in getHomePage callback 
const adminData = require('../routes/admin');

// Admin add product page
exports.getAddProductsPage = (req, res, next) => {
    res.render('add-product', {
        pageTitle : 'Add Product', 
        path : '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

// Admin add product page --> POST request
exports.getPostAddProducts = (req, res, next) => {
    products.push({ title : req.body.title });
    console.log(products);
    res.redirect('/');
};

// Home page
exports.getHomePage = (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { 
        pageTitle : 'Shop', 
        prods : products, 
        pageTitle : 'Shop', 
        path : '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};