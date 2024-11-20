const Joi = require('joi')

const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        'string.base': `"name" should be a type of 'text'`,
        'string.empty': `"name" cannot be an empty field`,
        'string.min': `"name" should have a minimum length of 3 characters`,
        'string.max': `"name" should have a maximum length of 100 characters`,
        'any.required': `"name" is a required field`
    }),
    quantity: Joi.number().integer().min(0).required().messages({
        'number.base': `"quantity" should be a number`,
        'number.min': `"quantity" should be greater than or equal to 0`,
        'any.required': `"quantity" is a required field`
    }),
    reviews: Joi.number().min(0).required().messages({
        'number.base':`"reviews" sould be a number`,
        'number.min': `"reviews" can't be negative number`,
        'any.required':`"reviews" is required field`
    }),
    score: Joi.number().min(0).max(5).required().messages({
        'number.base':`"reviews" sould be a number`,
        'number.min': `"reviews" can't be negative number`,
        'number.max': `"reviews" can't be bigger then 5`,
        'any.required':`"reviews" is required field`
    }),
    img_url: Joi.string().uri().required().messages({
        'string.base': `"img_url" should be a type of 'text'`,
        'string.empty': `"img_url" can't be an empty string`,
        'string.uri': `"img_url" should be a valid URL`,
        'any.required': `"img_url" is a required field`
    }),
    description: Joi.string().max(500).required().messages({
        'string.base': `"description" should be a type of 'text'`,
        'string.max': `"description" should have a maximum length of 500 characters`
    }),
    price: Joi.number().min(0).required().messages({
        'number.base': `"price" should be a number`,
        'number.min': `"price" should be greater than or equal to 0`,
        'any.required': `"price" is a required field`
    }),
    discount: Joi.number().min(0).max(100).required().messages({
        'number.base': `"discount" should be a number`,
        'number.min': `"discount" should be greater than or equal to 0`,
        'number.max': `"discount" should be less than or equal to 100`
    }),
    category_id: Joi.number().integer().min(1).max(6).required().messages({
        'number.base': `"category_id" should be an integer`,
        'any.required': `"category_id" is a required field`
    })
});

const updateProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).optional().messages({
        'string.base': `"name" should be a type of 'text'`,
        'string.empty': `"name" cannot be an empty field`,
        'string.min': `"name" should have a minimum length of 3 characters`,
        'string.max': `"name" should have a maximum length of 100 characters`,
        'any.required': `"name" is a required field`
    }),
    quantity: Joi.number().integer().min(0).optional().messages({
        'number.base': `"quantity" should be a number`,
        'number.min': `"quantity" should be greater than or equal to 0`,
        'any.required': `"quantity" is a required field`
    }),
    reviews: Joi.number().min(0).optional().messages({
        'number.base':`"reviews" sould be a number`,
        'number.min': `"reviews" can't be negative number`,
        'any.required':`"reviews" is required field`
    }),
    score: Joi.number().min(0).max(5).optional().messages({
        'number.base':`"reviews" sould be a number`,
        'number.min': `"reviews" can't be negative number`,
        'number.max': `"reviews" can't be bigger then 5`,
        'any.required':`"reviews" is required field`
    }),
    img_url: Joi.string().optional().uri().messages({
        'string.base': `"img_url" should be a type of 'text'`,
        'string.empty': `"img_url" can't be an empty string`,
        'string.uri': `"img_url" should be a valid URL`,
        'any.required': `"img_url" is a required field`
    }),
    description: Joi.string().max(500).optional().messages({
        'string.base': `"description" should be a type of 'text'`,
        'string.max': `"description" should have a maximum length of 500 characters`
    }),
    price: Joi.number().min(0).optional().messages({
        'number.base': `"price" should be a number`,
        'number.min': `"price" should be greater than or equal to 0`,
        'any.required': `"price" is a required field`
    }),
    discount: Joi.number().min(0).max(100).optional().messages({
        'number.base': `"discount" should be a number`,
        'number.min': `"discount" should be greater than or equal to 0`,
        'number.max': `"discount" should be less than or equal to 100`
    }),
    category_id: Joi.number().integer().min(1).max(6).optional().messages({
        'number.base': `"category_id" should be an integer`,
        'any.required': `"category_id" is a required field`
    })
});

module.exports = {
    createProductSchema,
    updateProductSchema
}
