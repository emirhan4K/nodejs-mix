const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı..`);
});
