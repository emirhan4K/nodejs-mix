module.exports = (req,res,next) => {
    const authHeader = req.header("Authorization");
    if(!authHeader){
     res.status(401).json({message: "Yetkisiz erisim: Token bulunamadi"});
    return next();
    };

    const token = authHeader.split(' ')[1];
    if(!token){
        res.status(401).json({message: "Yetkisiz erisim: Gecersiz token"});
        return next();
    };
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        console.log("TERMİNAL HATASI:", err.message); 
        res.status(401).json({message: "Yetkisiz erisim: Gecersiz token"});
        return next();
    }
};