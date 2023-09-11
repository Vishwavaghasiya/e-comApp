const express = require('express');

const { subCategoryController } = require('../../controllers');
const { subCategoryValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create record */
router.post(
    "/create-record",
    validate(subCategoryValidation.createSubCategory),
    subCategoryController.createSubCategory
);

/**get list */
router.get(
    "/get-list",
    subCategoryController.getSubCategoryList
);

/**find by id */
router.get(
    "/get-details/:subCategoryId",
    subCategoryController.getSubCategoryDetails
);

/**update record */
router.put(
    "/update-record/:subCategoryId",
    subCategoryController.updateRecord
);

/**delete record */
router.delete(
    "/delete-record/:subCategoryId",
    subCategoryController.deleteRecord
);

module.exports = router;