const path = require('path')
const ProductModel = require('../models/products.model')
class ProductController {
    const products = ProductModel.get();
console.log(products);
    getProducts(req, res) {
        return res.sendFile(
            path.join(path.resolve(), 'src', 'views', 'products.html')
        )
    }
}
module.exports = ProductController;