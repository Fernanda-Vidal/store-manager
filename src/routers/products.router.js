const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.get('/search',
  controller.productController.callSearchProducts);

router.get('/', controller.productController.getProduct);

router.get('/:productId',
  middleware.id.validateId,
  controller.productController.getProductById);

router.post('/',
  middleware.name.validateName,
  controller.productController.createProduct);
  
  router.put('/:productId',
  middleware.name.validateName,
  controller.productController.callUpdateProduct);
  
  router.delete('/:productId',
  controller.productController.callDeleteProduct);
  
  module.exports = router;