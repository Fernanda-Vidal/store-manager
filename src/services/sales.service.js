const model = require('../models');
const schema = require('./validations/validationsInputValues');

const addSale = async (objectSale) => {
  const sale = await model.salesModel.insertSale();

  if (objectSale.every(({ quantity }) => quantity >= 1)) {
    await Promise.all(objectSale.map(async ({ productId, quantity }) => {
     const validateItem = await schema.validateIdSchema(productId);
      if (validateItem.type !== null) return validateItem.message;
      await model.salesModel.insertSalesProduct(productId, quantity, sale);
    }));

    return { type: null, message: { id: sale, itemsSold: [...objectSale] } };
  } 
  return {
    type: 'INVALID_VALUE', message: '"quantity" must be greater than or equal to 1',
  };
};

module.exports = {
  addSale,
};