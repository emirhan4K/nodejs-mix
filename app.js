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

class KullaniciService {
  async kullaniciKaydet(isim, sifre) {
    const hashedPassword = await bcrypt.hash(sifre, 10);
    return {
        mesaj: "Kullanıcı başarıyla kaydedildi", 
        isim: isim, 
        hashliSifre: hashedPassword 
    };
  }

  async kullaniciGiris(girilenSifre, veritabanindakiHash) {
    const sifreDogrulama = await bcrypt.compare(girilenSifre, veritabanindakiHash);
    
    if(!sifreDogrulama) {
      throw new Error("Şifre doğrulama başarısız! Yanlış şifre.");
    }
    return { mesaj: "Şifre doğrulandı, adamı içeri alabiliriz!" };
  }
}

import jwt from "jsonwebtoken";

class authService {
  async kullanİcİGiris(girilenSifre, veritabanindakiHash, kullaniciId) {
    const sifreDogrulama = await bcrypt.compare(girilenSifre, veritabanindakiHash);
    if(!sifreDogrulama) {
      throw new Error("Şifre doğrulama başarısız! Yanlış şifre.");
    }
    const payload = { id: kullaniciId };
    const secret = process.env.JWT_SECRET;
    const ayarlar = { expiresIn: "2h" };
    const token = jwt.sign(payload, secret, ayarlar);
    return{
      mesaj: "Giriş başarılı, token oluşturuldu!",
      token:token
    }
  }
}


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı..`);
});
