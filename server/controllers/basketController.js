const ApiError = require('../errors/apiError');
const { basketProduct } = require('../models/models');


class BasketController {

    async addGood(req, res, next) {
        const { count, date, basketId, productId, tasteId } = req.body;
        console.log(count, date, basketId, productId, tasteId);

        if (!count || !date || !basketId || !productId || !tasteId) {
            return next(ApiError.BadRequest("Не допустимы пустые поля..."))
        }
        try {
            const prod = await basketProduct.create({ count, date, basketId, productId, tasteId });
            return res.json(prod);
        }

        catch (e) {
            return next(ApiError.BadRequest("Неправильный запрос к базе данных"));
        }


    }
}


module.exports = new BasketController();