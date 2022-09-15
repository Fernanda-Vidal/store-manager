const model = require('../models');
const schema = require('./validations/validationsInputValues');

const getAllProducts = async () => {
  const products = await model.productModel.findAll();

  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const validateId = await schema.validateIdSchema(productId);

  if (validateId.type) return validateId.message;
  
  const product = await model.productModel.findById(productId);
  return { type: null, message: product };
};

const addProduct = async (productName) => {
  const validateProduct = await schema.validateProductSchema(productName);

  if (validateProduct.type) return validateProduct.message;

  const productId = await model.productModel.insert(productName);
  return { type: null, message: productId };
};

const updateProduct = async (productName, productId) => {
  const { type } = await schema.validateIdProduct(productId);

  if (type !== null) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await model.productModel.update(productId, productName);
  return { type: null, message: '' };
};

const deleteProduct = async (productId) => {
  const { type } = await schema.validateIdProduct(productId);
  if (type !== null) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await model.productModel.deleteProductById(productId);
  return { type: null, message: '' };
};

const getSearchProducts = async (q) => {
  const result = await model.productModel.searchProducts(q);
  return { type: null, message: result };
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getSearchProducts,
};