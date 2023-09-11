const {SubChildCategory} = require('../models');

/**create record */
const createSubChildCategory = async (reqBody) => {
    return SubChildCategory.create(reqBody);
}

/**get list */
const getSubChildCategoryList = async (req, res) => {
    return SubChildCategory.find();
}

/**find by id */
const subChildCategoryById = async (subChildCategoryId) => {
    return SubChildCategory.findById(subChildCategoryId);
}

/**update record */
const updateRecord = async (subChildCategoryId, updateBody) => {
    return SubChildCategory.findByIdAndUpdate(subChildCategoryId, { $set: updateBody });
}

/**delete record */
const deleteRecord = async (subChildCategoryId) => {
    return SubChildCategory.findByIdAndDelete(subChildCategoryId);
}

module.exports = {
    createSubChildCategory,
    getSubChildCategoryList,
    subChildCategoryById,
    updateRecord,
    deleteRecord
}