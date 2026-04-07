const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const adminKontrol = require("./middleware/adminKontrol");

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.post("/api/urun-ekle", adminKontrol, (req, res) => {
  const {isim,fiyat} = req.body;
  if(!isim || !fiyat) {
    return res.status(400).json({ message: "Ürün adı ve fiyatı gereklidir." });
  }else
  {    res.status(201).json({ message: "adminKontrol", eklenenUrun: { isim, urunFiyati:fiyat } });
  }
});

app.get("/api/urunler/:urunId", (req, res) => {
  const {urunId} = req.params;
  res.json({ message: "Ürün detayları getirildi", arananId: urunId });
})





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı..`);
});
