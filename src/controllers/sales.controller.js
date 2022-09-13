const service = require('../services');
const errorMap = require('../utils/errorMap');

const createSale = async (req, res) => {
  const sale = req.body;

  const { type, message } = await service.saleService.addSale(sale);
  
  if (type !== null) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const callSales = async (_req, res) => {
  const { type, message } = await service.saleService.getAllSales();
  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const callSaleById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await service.saleService.getSaleById(id);
  console.log('controller', message);

  if (type !== null) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(message);
};

module.exports = {
  createSale,
  callSales,
  callSaleById,
};