const express = require('express');

const { subChildCategoryController } = require('../../controllers');
const { subChildCategoryValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create record */
router.post(
    "/create-record",
    validate(subChildCategoryValidation.createSubChildCategory),
    subChildCategoryController.createSubChildCategory
);

/**get list */
router.get(
    "/get-list",
    subChildCategoryController.getSubChildCategoryList
);

/**find by id */
router.get(
    "/get-details/:subChildCategoryId",
    subChildCategoryController.getSubChildCategoryDetails
);

/**update record */
router.put(
    "/update-record/:subChildCategoryId",
    subChildCategoryController.updateRecord
);

/**delete record */
router.delete(
    "/delete-record/:subChildCategoryId",
    subChildCategoryController.deleteRecord
);

module.exports = router;