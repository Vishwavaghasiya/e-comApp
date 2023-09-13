const Joi = require('joi');

const createSubChildCategory = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            description: Joi.string().required().trim(),
            subCategory: Joi.string().required().trim(),
        }
    )
}

module.exports = {
    createSubChildCategory
}