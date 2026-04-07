const adminKontrol = (req, res, next) => {
    const anahtar = req.query.anahtar;
    if(anahtar === "super-gizli-123") {
        next();
    }
    else {  
        res.status(401).json({ message: "Yetkisiz işlem! Sadece adminler girebilir." });
    }
}

module.exports = adminKontrol;