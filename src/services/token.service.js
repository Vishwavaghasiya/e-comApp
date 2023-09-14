const jwt = require("jsonwebtoken")
const { Token } = require("../models");
const config = require("../config/config");

/**generate token */
const generateToken = async (reqBody) => {
    let payload = {
        ...reqBody
    };
    return jwt.sign(payload, config.jwt.secret_key);
}

/**save token in our database*/
const saveToken = async (reqBody) => {
    return await Token.findOneAndUpdate(
        { user: reqBody.user },
        {
            $set: {
                ...reqBody,
            }
        },
        { new: true, upsert: true }
    );
}

module.exports = {
    generateToken,
    saveToken
}