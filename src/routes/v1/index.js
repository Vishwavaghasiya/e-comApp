const express = require('express');

const categoryRoute = require('./catageory.route');
const subCategoryRoute = require('./subCategory.route');
const subChildCategoryRoute = require('./subChildCategory.route');
const productRoute = require('./product.route');

const router = express.Router();

router.use("/category", categoryRoute);
router.use("/subCategory", subCategoryRoute);
router.use("/subChildCategory", subChildCategoryRoute);
router.use('/product', productRoute);

module.exports = router;