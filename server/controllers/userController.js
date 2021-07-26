const ApiError = require('../errors/apiError');
const { user, basket } = require('../models/models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const generateJWT = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.JWT_SECRET, {expiresIn:'12h'});
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            next(ApiError.BadRequest("Некорректный Email или Пароль..."))
        }
        const candidate = await user.findOne({ where: {email} })
        if (candidate){
            next(ApiError.BadRequest("Ползоавтель с таким Email уже есть в системе..."))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const newUser = await user.create({email, role, password:hashPassword});
        const basket_ = basket.create({userId: newUser.id});

        const token = generateJWT(newUser.id, newUser.email, newUser.role);

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password){
            next(ApiError.BadRequest("Не заполнено поле Email или пароль"))
        }
        const candidate = await user.findOne({ where: {email} })
        if (!candidate){
            next(ApiError.BadRequest("Пользователя с таким Email не существует"))
        }
        const password_ = await bcrypt.compare(password, candidate.password);
        if (password_){
            const token = generateJWT(candidate.id, candidate.email, candidate.role)
            return res.json({token})
        }
        next(ApiError.BadRequest("Не праильный логин или пароль")) 
    }
    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }
}

module.exports = new UserController();