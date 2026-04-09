const orderRepository = require("../repository/order.repository");
const cartRepository = require("../repository/cart.repository");

class OrderService {
  async siparisVer(userId, address) {
    const sepet = await cartRepository.kullaniciSepetiBul(userId);
    if (!sepet || sepet.items.length === 0) {
      throw new Error("Sepetiniz boş, sipariş verilemez!");
    }

    let totalPrice = 0;
    for (let item of sepet.items) {
      totalPrice += item.quantity * item.urunId.price;
    }

    const siparis = await orderRepository.siparisOluştur({
        userId: userId, 
        items: sepet.items, 
        totalPrice: totalPrice, 
        address: address
    });
    sepet.items = [];
    await sepet.save();
    
    return siparis;
  }
}
