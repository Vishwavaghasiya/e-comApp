const express = require('express');

const { subCategoryController } = require('../../controllers');
const { subCategoryValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.post(
    "/create-record",
    validate(subCategoryValidation.createSubCategory),
    subCategoryController.createSubCategory
);

router.get(
    "/get-list",
    subCategoryController.getSubCategoryList
);

router.get(
    "/get-details/:subCategoryId",
    subCategoryController.getSubCategoryDetails
);

router.put(
    "/update-record/:subCategoryId",
    subCategoryController.updateRecord
);

router.delete(
    "/delete-record/:subCategoryId",
    subCategoryController.deleteRecord
);

module.exports = router;