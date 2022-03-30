const fs = require('fs');
const path = require('path');
const cwd = process.cwd();


module.exports = class Product {
    constructor(prodName) {
        this.prodName = prodName;
    };

    save() {
        const productPath = path.join(cwd, 'data', 'products.json');
        fs.readFile(productPath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }

            products.push(this);
            fs.writeFile(productPath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
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
