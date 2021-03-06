const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    if(req.method === "OPTIONS"){
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(token === 'null'){
            return res.status(401).json({message:"Вы не авторизваны"});
        }
        
        const decodeJWT = jwt.decode(token, process.env.JWT_SECRET);
        req.user = decodeJWT;
        next();
    } catch (e) {
        return res.status(403).json({message:"Вы не авторизваны"})
    }
}