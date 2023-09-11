const Joi = require('joi');

/** create user */
const createUser = {
    body : Joi.object().keys({
        userName : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        password : Joi.string().required().trim(),
        firstName : Joi.string().required().trim(),
        lastName : Joi.string().required().trim(),
        dateOfBirth : Joi.string().required().trim(),
        order : Joi.string().required().trim(),
        wishlist : Joi.string().required().trim(),
        review : Joi.string().required().trim(),
    }),
};

module.exports = {
    createUser
}