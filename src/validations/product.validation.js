const Joi = require('joi');

const createProduct = {
    body: Joi.object().keys({
        productName: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        price: Joi.number().integer().allow(),
        user: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        product_image: Joi.string().allow("")
    }),
};

module.exports = {
    createProduct
}