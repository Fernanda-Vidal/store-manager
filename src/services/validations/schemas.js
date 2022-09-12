const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const addRequestProductSchema = Joi.object({
  productId: idSchema,
});

module.exports = {
  addRequestProductSchema,
};