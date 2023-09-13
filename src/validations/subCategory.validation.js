const Joi = require('joi');

const createSubCategory = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            description: Joi.string().required().trim(),
            category: Joi.string().required().trim(),
        }
    )
}

module.exports = {
    createSubCategory
}