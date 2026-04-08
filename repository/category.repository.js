const Category = require("../models/Category.model")

class CategoryRepository {
  async categoryEkle(name) {
    const newAdd = new Category({
      name,
    });
    return await newAdd.save();
  }

  async categoryleriGetir() {
    const allCategory = await User.find();
    return allCategory;
  }

  async ismeGöreBul(name) {
    const names = await User.findOne({ name });
    return names;
  }
};

module.exports = new CategoryRepository();
