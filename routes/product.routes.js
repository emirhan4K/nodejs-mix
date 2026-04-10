const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const upload = require("../middlewares/upload.middleware");
const validate = require("../middlewares/validation.middleware");
const productSchema = require("../validations/product.validation");

router.post("/",upload.single("image"),validate(productSchema),productController.productAdd);
router.get("/getir",productController.productGetir);
router.get("/:slug", productController.slugaGoreGetir);

module.exports = router;
