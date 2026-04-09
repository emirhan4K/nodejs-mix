const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/",productController.productAdd);
router.get("/getir",productController.productGetir);

module.exports = router;
