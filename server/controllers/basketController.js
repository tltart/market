const ApiError = require('../errors/apiError');
const {basket} = require('../models/models');


class BasketController {

    async addGood(req, res, next){
        const {} = req.body;
    }
}


module.exports = new BasketController();