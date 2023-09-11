const express = require('express');

const {categoryController} = require('../../controllers');
const {categoryValidation} = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create category */
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

/**get list */
router.get(
    "/category-list",
    categoryController.getCategoryList
);

/**get details by id */
router.get(
    "/category-details/:categoryId",
    categoryController.getCategoryDetails
);

/**update record */
router.put(
    "/update-record/:categoryId",
    categoryController.updateCategory
);

/**delete record */
router.delete(
    "/delete-record/:categoryId",
    categoryController.deleteRecord
);

module.exports = router;