const express = require("express");
const { cartController } = require('../../controllers');
const { cartValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/cart-data",
    validate(cartValidation.createCart),
    cartController.createCart
);

router.get(
    "/cart-list",
    cartController.getCartList
);

router.get(
    "/cart-details/:cartId",
    cartController.getCartDetails
);

router.put(
    "/cart-update/:cartId",
    cartController.updateCart
);

router.delete(
    "/delete-cart/:cartId",
    cartController.deleteRecord
);

module.exports = router