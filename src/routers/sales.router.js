const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', controller.salesController.callSales);

router.get('/:saleId', controller.salesController.callSaleById);

router.post('/',
  middleware.sales.validateFieldsSales,
  controller.salesController.createSale);

module.exports = router;