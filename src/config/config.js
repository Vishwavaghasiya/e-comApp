const dotenv = require("dotenv");
const Joi = require("joi");

/** Loading Environment Variables */
dotenv.config({ path: "./.env" });

/** Defining Schema for Environment Variables */
const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().trim().description("Mongodb url"),
    BASE_URL: Joi.string().trim().description("Base URL"),
    JWT_SECRET_KEY: Joi.string().description("Jwt secret key")
}).unknown();

/** Validating Environment Variables */
const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

/** Handling Validation Errors */
if (error) {
    console.log("Config Error: ", error);
}

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    base_url: envVars.BASE_URL,
    jwt: {
        secret_key: envVars.JWT_SECRET_KEY
    },
};