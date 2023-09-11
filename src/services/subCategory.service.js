const {SubCategory} = require('../models');

/**create record */
const createSubCategory = async (reqBody) => {
    return SubCategory.create(reqBody);
}

/**get list */
const getSubCategoryList = async (req, res) => {
    return SubCategory.find().populate("category");
}

/**find by id */
const subCategoryById = async (subCategoryId) => {
    return SubCategory.findById(subCategoryId);
}

/**update record */
const updateRecord = async (subCategoryId, updateBody) => {
    return SubCategory.findByIdAndUpdate(subCategoryId, { $set: updateBody });
}

/**delete record */
const deleteRecord = async (subCategoryId) => {
    return SubCategory.findByIdAndDelete(subCategoryId);
}

module.exports = {
    createSubCategory,
    getSubCategoryList,
    subCategoryById,
    updateRecord,
    deleteRecord
}