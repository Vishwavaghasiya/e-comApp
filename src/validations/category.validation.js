const Joi = require('joi');

const createCategory = {
    body : Joi.object().keys(
        {
            categoryName : Joi.string().required().trim(),
            description : Joi.string().required().trim(),
            parentId : Joi.string().required().trim(),
            subCategory : Joi.string().required().trim(),
            subChildCategory : Joi.string().required().trim(),
        }
    )
}

module.exports = {
    createCategory
}