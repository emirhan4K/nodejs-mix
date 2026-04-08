const categoryService = require("../services/category.service");

class CategoryController {
  async categoryEkle(req, res) {
    const { name } = req.body;
    try {
      const response = await categoryService.categoryEkle(name);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async categoryleriGetir(req, res) {
    try {
      const response = await categoryService.categoryleriGetir();
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new CategoryController();
