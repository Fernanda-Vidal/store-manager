const model = require('../models');
const schema = require('./validations/validationsInputValues');

const getAllProducts = async () => {
  const products = await model.productModel.findAll();

  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const validateId = await schema.validateProductSchema(
    productId,
  );

  if (validateId.type) return validateId.message;
  
  const product = await model.productModel.findById(productId);
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};