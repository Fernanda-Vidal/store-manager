const service = require('../services');
const errorMap = require('../utils/errorMap');

const createSale = async (req, res) => {
  const sale = req.body;

  const { type, message } = await service.saleService.addSale(sale);
  
  if (type !== null) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createSale,
};