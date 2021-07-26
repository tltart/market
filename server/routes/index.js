const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const basketRouter = require('./basketRouter');
const infoRouter = require('./infoRouter');


router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/basket', basketRouter);
router.use('/info', infoRouter);

module.exports = router;

