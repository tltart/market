const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', authMiddleware, BasketController.addGood);
router.get('/', authMiddleware, BasketController.getGood);
router.post('/test', authMiddleware, BasketController.test);

module.exports = router;