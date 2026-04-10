const productRepository = require("../repository/product.repository");
const slugify = require("slugify")

class ProductService{
    async productAdd(productData){
        const {name,price,stock,imageUrl,kategoriId} = productData;
        if(!name || price === undefined || stock === undefined || !imageUrl || !kategoriId ){
            throw new Error("Lütfen tüm zorunlu alanları doldurun!");
        } 
        if(price<0 || stock <0){
            throw new Error("Fiyat ve stok 0'dan küçük olamaz!");
        }
        const uretilenSlug = slugify(productData.name,{
            lower:true, // Hepsini küçük harf yap
            strict:true, // Özel karakterleri (!, ?, &) temizle
        })
        if(!uretilenSlug){
            throw new Error("Slug parametresi gerekli!")
        }
        productData.slug = uretilenSlug;
        const result = await productRepository.productAdd(productData);
        return result;
    }

    async productGetir(){
        const result = await productRepository.productGetir();
        return result;
    }

    async slugIleBul(slug){
        const urun = await productRepository.slugIleBul(slug);
        if(!urun){
            throw new Error("Böyle bir ürün bulunamadı!")
        }
        return urun
    }
}

module.exports = new ProductService();