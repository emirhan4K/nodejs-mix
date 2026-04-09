const Order = require("../models/Order.model");

 class OrderRepository{
    async siparisOluştur(siparisVerisi){
        const result = await Order.create(siparisVerisi);
        return result;
    }
    async kullaniciSiparisleriniGetir(userId){
        const orders = await Order.find({userId}).populate('items.urunId')
        return orders;
    }
 }

 module.exports = new OrderRepository();