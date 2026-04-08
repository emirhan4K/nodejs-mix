const noteController = require("../controllers/note.controller");
const jwtKontrol = require("../middlewares/jwtKontrol")
const express = require("express");
const router = express.Router();

router.post("/notes",jwtKontrol, noteController.createNote);
router.get("/notes",jwtKontrol, noteController.getNotes);

module.exports = router;
