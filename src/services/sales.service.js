const model = require('../models');
// const schema = require('./validations/validationsInputValues');

const addSale = async (objectSale) => {
  const qtValid = objectSale.every(({ quantity }) => quantity > 0);
  // Verificar isso.
  // const aaa = await (await Promise.all(objectSale.map(({ productId }) => schema.isProduct(productId)))).every((item) => item === true);

  if (qtValid) {
    // const sale = await model.salesModel.insertSale();
    // await Promise.all(objectSale.map(({ productId, quantity }) => {

    // return { type: null, message: { id: sale, itemsSold: [...objectSale] } };
  } 
  return {
    type: 'INVALID_VALUE', message: '"quantity" must be greater than or equal to 1',
  };
};

const getAllSales = async () => {
  const sales = await model.salesModel.findAll();

  return { type: null, message: sales };
};

const getSaleById = async (saleId) => {
  // const validateId = await schema.validateSaleSchema(saleId);
  // console.log('validateId', validateId);
  // if (validateId.type !== null) return validateId;

  const sale = await model.salesModel.findById(saleId);
  
  if (sale.length === 0) {
    console.log({ type: 404, message: '"saleId" not exist' });
    return { type: 404, message: '"saleId" not exist' };
  }

  console.log('service', sale.length);
  return { type: null, message: sale };
};

module.exports = {
  addSale,
  getAllSales,
  getSaleById,
};