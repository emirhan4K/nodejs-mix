const User = require("../models/user.model");

class UserRepository {
  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async updateById(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  }
}

module.exports = new UserRepository();