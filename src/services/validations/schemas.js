const Joi = require('joi');

const numberSchema = Joi.number().integer().min(1).required();
const productSchema = Joi.string().min(5).required();

const addRequestIdSchema = Joi.object({
  productId: numberSchema,
});

const addRequestProductSchema = Joi.object({
  productName: productSchema,
});

const addRequestNumberSchema = Joi.object({
  quantity: numberSchema,
});

module.exports = {
  addRequestIdSchema,
  addRequestProductSchema,
  addRequestNumberSchema,
};