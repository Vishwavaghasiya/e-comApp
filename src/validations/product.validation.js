const Joi = require('joi');

/** create product */
const createProduct = {
    body : Joi.object().keys({
        productName : Joi.string().required().trim(),
        description : Joi.string().required().trim(),
        price : Joi.number().integer().allow(),
        user : Joi.string().required().trim(),
        category : Joi.string().required().trim()
    }),
};

module.exports = {
    createProduct
}