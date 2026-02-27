const userRepository = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

class UserService {
  async register(userData) {
    const { username, email, password, confirmPassword } = userData;
    if (password !== confirmPassword) {
      throw new Error("Şifreler eşleşmiyor!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await userRepository.create({
      username,
      email,
      password: hashedPassword,
    });
  }

  async login(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Kullanıcı bulunamadı");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Hatalı şifre.");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    return { resetToken, token };
  }
}
module.exports = new UserService();
