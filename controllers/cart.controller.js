const cartService = require("../services/cart.service");

class CartController{
    async sepeteEkle(req,res){
        const {userId,productId,quantity} = req.body;
        try {
            const result = await cartService.sepeteEkle(userId,productId,quantity);
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json({message : error.message})
        }
    }
}

module.exports = new CartController();