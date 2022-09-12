const validation = require('./schemas');
const model = require('../../models');

const isProduct = async (productId) => {
  const product = await model.productModel.findById(productId);
  if (product) return true;
  return false;
};

const validateProductSchema = async (productId) => {
  const { error } = validation.addRequestProductSchema.validate({ productId });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  
  const product = await isProduct(productId);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: '' };
};

module.exports = {
  validateProductSchema,
};