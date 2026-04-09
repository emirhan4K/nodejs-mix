const productService = require("../services/product.service");

class ProductController {
  async productAdd(req, res) {
    const productData  = req.body;
    if (req.file) {
        productData.imageUrl = req.file.filename;
    }
    try {
      const response = await productService.productAdd(productData);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async productGetir(req, res) {
    try {
      const result = await productService.productGetir();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();