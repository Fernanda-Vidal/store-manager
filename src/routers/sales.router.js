const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', controller.salesController.callSales);

router.get('/:saleId', controller.salesController.callSaleById);

router.post('/',
  middleware.sales.validateFieldsSales,
  controller.salesController.createSale);

router.delete('/:saleId', controller.salesController.callDeleteSales);

router.put('/:saleId',
  middleware.sales.validateFieldsSales,
  controller.salesController.callUpdateSale);

module.exports = router;