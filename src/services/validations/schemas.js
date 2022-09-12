const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const productSchema = Joi.string().min(5).required();

const addRequestIdSchema = Joi.object({
  productId: idSchema,
});

const addRequestProductSchema = Joi.object({
  productName: productSchema,
});

module.exports = {
  addRequestIdSchema,
  addRequestProductSchema,
};