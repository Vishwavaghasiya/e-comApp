const { SubCategory } = require('../models');

const createSubCategory = async (reqBody) => {
    return SubCategory.create(reqBody);
}

const getSubCategoryList = async (req, res) => {
    return SubCategory.find().populate("category");
}

const subCategoryById = async (subCategoryId) => {
    return SubCategory.findById(subCategoryId);
}

const updateRecord = async (subCategoryId, updateBody) => {
    return SubCategory.findByIdAndUpdate(subCategoryId, { $set: updateBody });
}

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