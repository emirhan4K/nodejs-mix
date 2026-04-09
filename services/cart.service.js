const cartRepository = require("../repository/cart.repository");
const productRepository = require("../repository/product.repository");

class CartService {
  async sepeteEkle(userId, productId, quantity) {
    const product = await productRepository.idBul(productId);
    if (!product) {
      throw new Error("Böyle bir ürün bulunamadı!");
    }
    let sepet = await cartRepository.kullaniciSepetiBul(userId);
    if (!sepet) {
      sepet = await cartRepository.yeniSepetOluştur(userId);
    }
    const index = sepet.items.findIndex(item => item.urunId._id.toString() === productId.toString());
    if (index !== -1) {
        sepet.items[index].quantity += quantity;
    } else {
        sepet.items.push({ urunId: productId, quantity });
    }
    await sepet.save();
    return sepet;
  }
}

module.exports = new CartService();