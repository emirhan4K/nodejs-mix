const jwt = require("jsonwebtoken");

const jwtKontrol = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Token bulunamadı! Lütfen giriş yapın." });
  }
  try {
    req.user = cozulmusToken;
    const token = authHeader.split(" ")[1];
    const cozulmusToken = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res
      .status(403)
      .json({ message: "Geçersiz token! Lütfen geçerli bir token sağlayın." });
  }
};



module.exports = jwtKontrol;
