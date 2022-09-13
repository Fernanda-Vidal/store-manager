const validation = require('./schemas');
const model = require('../../models');

const isProduct = async (productId) => {
  const product = await model.productModel.findById(productId);
  if (product) return true;
  return false;
};

const isSale = async (saleId) => {
  const sale = await model.salesModel.findById(saleId);
  console.log('isSale', sale);
  if (sale) return true;
  return false;
};

const validateIdSchema = async (productId) => {
  const { error } = validation.addRequestIdSchema.validate({ productId });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  
  const product = await isProduct(productId);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: '"productId" not found' };

  return { type: null, message: '' };
};

const validateProductSchema = async (productName) => {
  const { error } = validation.addRequestProductSchema.validate({ productName });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateSaleSchema = async (saleId) => {
  const { error } = validation.addRequestIdSale.validate({ saleId });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  const sale = await isSale(saleId);
  if (!sale) return { type: 'SALE_NOT_FOUND', message: '"saleId" not found' };

  return { type: null, message: '' };
};

module.exports = {
  validateIdSchema,
  validateProductSchema,
  isProduct,
  validateSaleSchema,
};