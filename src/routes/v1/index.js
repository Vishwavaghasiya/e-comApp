const express = require('express');

const categoryRoute = require('./catageory.route');
const subCategoryRoute = require('./subCategory.route');
const subChildCategoryRoute = require('./subChildCategory.route');
const productRoute = require('./product.route');
const userRoute = require('./user.route');
const cartRoute = require('./cart.route');
const orderRoute = require('./order.route');

const router = express.Router();

router.use("/category", categoryRoute);
router.use("/subCategory", subCategoryRoute);
router.use("/subChildCategory", subChildCategoryRoute);
router.use('/product', productRoute);
router.use('/user', userRoute);
router.use('/cart', cartRoute);
router.use('/order', orderRoute);

module.exports = router;