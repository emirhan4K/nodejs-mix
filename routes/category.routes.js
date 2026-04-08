const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/category.controller");

router.post("/",categoryController.categoryEkle);
router.get("/getir",categoryController.categoryleriGetir)

module.exports = router;
