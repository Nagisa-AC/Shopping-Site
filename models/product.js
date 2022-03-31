const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
const productPath = path.join(cwd, 'data', 'products.json');


module.exports = class Product {
    constructor(prodName) {
        this.prodName = prodName;
    };

    save() {
        // const productPath = path.join(cwd, 'data', 'products.json'); // uncoment this for !err
        fs.readFile(productPath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }

            products.push(this);
            fs.writeFile(productPath, JSON.stringify(products), (err) => {
                if (err) console.log(err);
            });
        });
    };


    static fetchProds(callBack) {
        fs.readFile(productPath, (err, fileContent) => {
            if (err) {
                callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    };
};
