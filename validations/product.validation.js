const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.empty": "Ürün adı boş bırakılamaz!",
    "string.min": "Ürün adı en az 2 karakter olmalıdır!",
    "any.required": "Ürün adı zorunludur!"
  }),
  
  price: Joi.number().min(0).required().messages({
    "number.min": "Fiyat 0'dan küçük olamaz!",
    "any.required": "Fiyat zorunludur!"
  }),
  
  stock: Joi.number().integer().min(0).required().messages({
    "number.min": "Stok 0'dan küçük olamaz!"
  }),
  kategoriId: Joi.string().required(),
});

module.exports = productSchema;