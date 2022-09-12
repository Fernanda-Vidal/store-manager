const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares/validateProductFields');

const router = express.Router();

router.get('/', controller.productController.getProduct);
router.get('/:productId',
  middleware.validateProductsFilds,
  controller.productController.getProductById);

module.exports = router;