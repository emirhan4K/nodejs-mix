const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  slug:{
    type:String,
    unique:true
  },
  imageUrl: {
    type: String,
    required: true,
  },
  kategoriId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  }
});

module.exports = mongoose.model("Product", productSchema);
