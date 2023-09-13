const Joi = require('joi');

const generateToken = {
    body: Joi.object().keys({
        user: Joi.string().required()
    })
}

module.exports = {
    generateToken
}