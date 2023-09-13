const express = require("express");

const { orderController } = require('../../controllers');
const { orderValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/order-create",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

router.get(
    "/order-list",
    orderController.getOrderList
);

router.get(
    "/order-details/:orderId",
    orderController.getOrderDetails
);

router.put(
    "/order-update/:orderId",
    orderController.updateOrder
);

router.delete(
    "/delete-order/:orderId",
    orderController.deleteRecord
);

module.exports = router