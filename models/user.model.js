const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength: 6
    },
    resetPasswordToken:String,
    resetPasswordExpires:Date
});

module.exports = mongoose.model("User",UserSchema);