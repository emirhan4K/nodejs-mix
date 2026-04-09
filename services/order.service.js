const orderRepository = require("../repository/order.repository");
const cartRepository = require("../repository/cart.repository");

class OrderService{
    async siparisVer(userId, address){
        const cart = await cartRepository.kullaniciSepetiBul(userId);
        if(!cart || cart.items.length === 0){
            throw new Error("Sepetiniz boş, sipariş verilemez!");
        }
        
    }
}