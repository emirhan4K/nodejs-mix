const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const adminKontrol = require("./middleware/adminKontrol");
import bcrypt from "bcrypt";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı..`);
});
