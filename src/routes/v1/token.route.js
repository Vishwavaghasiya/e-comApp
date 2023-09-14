const express = require("express");

const { tokenController } = require("../../controllers");
const { tokenValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth");

const router = express.Router();

/**create jsonWebToken */
router.post(
    "/create-token",
    validate(tokenValidation.generateTokens),
    tokenController.generateToken
);

/**verify token to get user details */
router.get(
    "/verify-token",
    // auth(),
    tokenController.verifyToken
);

module.exports = router