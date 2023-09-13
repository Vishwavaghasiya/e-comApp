const express = require('express');

const {categoryController} = require('../../controllers');
const {categoryValidation} = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

router.get(
    "/category-list",
    categoryController.getCategoryList
);

router.get(
    "/category-details/:categoryId",
    categoryController.getCategoryDetails
);

router.put(
    "/update-record/:categoryId",
    categoryController.updateCategory
);

router.delete(
    "/delete-record/:categoryId",
    categoryController.deleteRecord
);

module.exports = router;