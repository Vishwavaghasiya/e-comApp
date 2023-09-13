const express = require('express');

const { subChildCategoryController } = require('../../controllers');
const { subChildCategoryValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.post(
    "/create-record",
    validate(subChildCategoryValidation.createSubChildCategory),
    subChildCategoryController.createSubChildCategory
);

router.get(
    "/get-list",
    subChildCategoryController.getSubChildCategoryList
);

router.get(
    "/get-details/:subChildCategoryId",
    subChildCategoryController.getSubChildCategoryDetails
);

router.put(
    "/update-record/:subChildCategoryId",
    subChildCategoryController.updateRecord
);

router.delete(
    "/delete-record/:subChildCategoryId",
    subChildCategoryController.deleteRecord
);

module.exports = router;