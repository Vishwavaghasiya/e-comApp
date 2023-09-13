const { SubChildCategory } = require('../models');

const createSubChildCategory = async (reqBody) => {
    return SubChildCategory.create(reqBody);
}

const getSubChildCategoryList = async (req, res) => {
    return SubChildCategory.find().populate("subCategory");
}

const subChildCategoryById = async (subChildCategoryId) => {
    return SubChildCategory.findById(subChildCategoryId);
}

const updateRecord = async (subChildCategoryId, updateBody) => {
    return SubChildCategory.findByIdAndUpdate(subChildCategoryId, { $set: updateBody });
}

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