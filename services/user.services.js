const UserRepository = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

class UserService{
    async register(userData){
        const {username,email,password,confirmPassword} = userData;
        if(password !== confirmPassword){
            throw new Error("Şifreler eşleşmiyor!");
        }
    }
}