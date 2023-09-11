const express = require('express');

const { productController } = require('../../controllers');
const { productValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

router.get(
    "/product-list",
    productController.getProductList
);

router.get(
    "/product-details/:productId",
    productController.getProductDetails
);

router.delete(
    "/delete-product/:productId",
    productController.deleteRecord
);

router.put(
    "/product-update/:productId",
    productController.updateProduct
);

module.exports = router