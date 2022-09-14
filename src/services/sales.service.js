const model = require('../models');
const schema = require('./validations/validationsInputValues');

const addSale = async (objectSale) => {
  const qtValid = objectSale.every(({ quantity }) => quantity > 0);
  const idExist = await (await Promise.all(objectSale
    .map(({ productId }) => schema.isProduct(productId)))).every((item) => item === true);

  if (!qtValid) {
    return { type: 'INVALID_VALUE', message: '"quantity" must be greater than or equal to 1' };
  }
  if (!idExist) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
 
  const sale = await model.salesModel.insertSale();
  
  await Promise.all(objectSale.map(({ productId, quantity }) => {
    const addDb = model.salesModel.insertSalesProduct(productId, quantity, sale);
    return addDb;
  }));
  
  return { type: null, message: '' };
};

const getAllSales = async () => {
  const sales = await model.salesModel.findAll();

  return { type: null, message: sales };
};

const getSaleById = async (saleId) => {
  const sale = await model.salesModel.findById(saleId);
  
  if (sale.length === 0) {
    return { type: 404, message: '"saleId" not exist' };
  }

  return { type: null, message: sale };
};

const deleteSale = async (saleId) => {
  const sale = await model.salesModel.findById(saleId);

  if (sale.length === 0) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }

  await model.salesModel.deleteSaleById(saleId);
  return { type: null, message: '' };
};

const updateSale = async (saleId, objectSale) => {
  const sale = await model.salesModel.findById(saleId);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  const qtValid = objectSale.every(({ quantity }) => quantity > 0);
  if (!qtValid) {
    return { type: 'INVALID_VALUE', message: '"quantity" must be greater than or equal to 1' };
  }

  const idExist = await (await Promise.all(objectSale
    .map(({ productId }) => schema.isProduct(productId)))).every((item) => item === true);
  if (!idExist) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await Promise.all(objectSale.map(({ productId, quantity }) => {
    const updateDB = model.salesModel.update(saleId, productId, quantity);
    return updateDB;
  }));

  return { type: null, message: { saleId, itemsUpdate: [...objectSale] } };
};

module.exports = {
  addSale,
  getAllSales,
  getSaleById,
  deleteSale,
  updateSale,
};