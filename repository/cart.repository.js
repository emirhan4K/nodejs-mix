const Cart = require("../models/Cart.model");

class CartRepository{
    async kullaniciSepetiBul(userId){
        const sepet = await Cart.findOne({userId}).populate('items.urunId');
        return sepet;
    }

    async yeniSepetOluştur(userId){
        const yeniSepet = await Cart.create({userId});
        return yeniSepet;
    }
}

module.exports = new CartRepository();