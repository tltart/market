const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController')


router.post('/', BasketController.addGood)
router.get('/', BasketController.getGood)

module.exports = router;