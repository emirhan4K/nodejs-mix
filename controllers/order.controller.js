const orderService = require("../services/order.service");

class OrderController{
    async siparisVer(req,res){
        const {userId,address} = req.body;
        try {
            const result = await orderService.siparisVer(userId,address);
            res.status(201).json(result)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}

module.exports = new OrderController();