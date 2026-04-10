const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const upload = require("../middlewares/upload.middleware");

router.post("/",upload.single("image"),productController.productAdd);
router.get("/getir",productController.productGetir);
router.get("/:slug", productController.slugaGoreGetir);

module.exports = router;
