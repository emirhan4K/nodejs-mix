const productRepository = require("../repository/product.repository");

class ProductService{
    async productAdd(productData){
        const {name,price,stock,imageUrl,kategoriId} = productData;
        if(!name || price === undefined || stock === undefined || !imageUrl || !kategoriId ){
            throw new Error("Lütfen tüm zorunlu alanları doldurun!");
        } 
        if(price<0 || stock <0){
            throw new Error("Fiyat ve stok 0'dan küçük olamaz!");
        }

        const result = await productRepository.productAdd(productData);
        return result;
    }

    async productGetir(){
        const result = await productRepository.productGetir();
        return result;
    }
}

module.exports = new ProductService();