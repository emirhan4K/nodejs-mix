const Product = require("../models/Product.model");

class ProductRepository{
    async productAdd(productData){
        const newAdd = await Product.create(productData);
        return newAdd;
    }

    async productGetir(){
        const product = await Product.find().populate('kategoriId');
        return product;
    }

    async idBul(productId){
        const id = await Product.findById(productId);
        return id;
    }
}

module.exports = new ProductRepository();
