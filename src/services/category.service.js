const { Category } = require('../models');

const createCategory = async (reqBody) => {
    return Category.create(reqBody);
}

const getCategoryList = async (req, res) => {
    return Category.find().populate("subCategory").populate("subChildCategory");
}

const deleteRecord = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
}

const categoryById = async (categoryId) => {
    return Category.findById(categoryId);
}

const updateCategory = async (categoryId, updateBody) => {
    return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
}

module.exports = {
    createCategory,
    getCategoryList,
    deleteRecord,
    categoryById,
    updateCategory
}