const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const products = [];


module.exports = class Product {
    constructor(prodName) {
        this.prodName = prodName;
    };

    save() {
        products.push(this);
    };

    











    // save() {
    //     const productsPath = path.join(
    //         path.dirname(require.main.filename), '../', 'data', 'products.json');

    //     fs.readFile(productsPath, (err, data) => {
    //         let products = [];
    //         if (!err) {
    //             products = JSON.parse(data);
    //         }
    //         products.push(this);
    //         fs.writeFile(productsPath, JSON.stringify(products), (err) => {
    //             console.log(err);                
    //         });
    //     })
    // };

    static fetchProds() {
        return products;
    };
};