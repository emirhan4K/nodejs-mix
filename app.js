const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db"); 
const authRoutes = require("./routes/auth.routes");
const noteRoutes = require("./routes/note.routes");
const categoryRoutes = require("./routes/category.routes");


const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes); 
app.use("/api", noteRoutes);     
app.use("/api/categories",categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda başarıyla başlatıldı!`);
});