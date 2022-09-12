const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/', controller.productController.getProduct);

router.get('/:productId',
  middleware.id.validateId,
  controller.productController.getProductById);

router.post('/',
  middleware.name.validateName,
  controller.productController.createProduct);

module.exports = router;