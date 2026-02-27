const userService = require("../services/user.services");

class UserController {
  async register(req, res) {
    try {
      const user = await userService.registerUser(req.body);
      res.status(201).json({ message: "Başarıyla kayıt olundu.", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.loginUser(email, password);
      res.status(200).json({ message: "Giriş başarılı.", userId: user._id });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  async forgotPassword(req, res) {
    try {
      const token = await userService.createPasswordResetToken(req.body.email);
      res.status(200).json({ message: "Sıfırlama linki gönderildi.", token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
