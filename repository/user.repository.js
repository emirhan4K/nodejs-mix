const User = require("../models/User.model");

class UserRepository {
  async emailBul(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async createUser(name, email, password) {
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    return newUser;
  }
}

module.exports = new UserRepository();
