const Joi = require('Joi');

exports.validate = (data) => {
    const userSchemaValidation = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        isAdmin: Joi.boolean().required(),
        age: Joi.number().required(),
        password: Joi.string()
    })
    return userSchemaValidation.validate(data)
}

