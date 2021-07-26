const jwt = require('jsonwebtoken');

module.exports = function(role){
    return function (req, res, next){
        if(req.method === "OPTIONS"){
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if(!token){
                res.status(401).json({message:"Нет токена"});
            }
            const decodeJWT = jwt.decode(token, process.env.JWT_SECRET);
            if (decodeJWT.role !== role){
                res.status(403).json("Нет прав доступа")
            }
            req.user = decodeJWT;
            next();
        } catch (e) {
            res.status(403).json({message:"Ошибка какая-то"})
        }
    }
}