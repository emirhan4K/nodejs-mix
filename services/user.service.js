const userRepository = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  async register(name, email, password) {
    const existingUser = await userRepository.emailBul(email);
    if (existingUser) {
      throw new Error("Bu email zaten kayıtlı.");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.createUser(
      name,
      email,
      hashedPassword,
    );
    return { message: "Kullanıcı başarıyla oluşturuldu.", newUser };
  }

    async login(email, password) {
        const user = await userRepository.emailBul(email);
        if (!user) {
            throw new Error("Kullanıcı bulunamadı.");
        }
        
    }

}
