const { model } = require('../db');
const ApiError = require('../errors/apiError');
const { basketProduct, product, basket } = require('../models/models');



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

    async getGood(req, res, next) {
        const { basketId } = req.query;

        let product_;

        if (!basketId) {
            product_ = await basketProduct.findAll()
        }
        else {
            product_ = await basketProduct.findAll({
                where: { basketId },
                include: [{ model: product, as: 'product' },
                { model: basket, as: 'basket' }]
            })
        }
        return res.json(product_);

    }
}


module.exports = new BasketController();