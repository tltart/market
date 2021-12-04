const { product, productInfo, taste } = require('../models/models');
const ApiError = require('../errors/apiError');
const uuid = require('uuid');
const path = require('path');
const { model } = require('../db');


class ProductController {
    async create(req, res, next) {
        try {
            const { name, price, info } = req.body;
            const { img } = req.files;
            let filename = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const product_ = await product.create({ name, price, img: filename, info });

            return res.json(product_)

        }
        catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }
    async getAll(req, res) {
        const { productId } = req.query;
        let product_;
        if (productId) {
            product_ = await product.findAndCountAll({ where: { productId } });
        }
        else {
            product_ = await product.findAndCountAll();
        }
        return res.json(product_);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const product_ = await product.findOne({ where: { id } })
        return res.json(product_);
    }

    async createTaste(req, res, next) {

        try {
            const { name } = req.body;
            const name_ = await taste.create({ name });

            return res.json(name_)
        }

        catch (e) {
            next(ApiError.BadRequest(e.message))
        }
    }
}

module.exports = new ProductController();
