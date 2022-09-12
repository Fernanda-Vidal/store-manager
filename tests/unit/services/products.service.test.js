const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
// const { getAllProducts, getProductById } = require('../../../src/services/products.service');
const productService = require('../../../src/services/products.service');

const products = require('./mocks/products.service.mock');

describe('Testes de unidade do service de produtos', function () {
  it('Testa a rota /products', async function () {
    sinon.stub(productModel, 'findAll').resolves(products);

    const result = await productService.getAllProducts();
    expect(result.message).to.be.deep.equal(products)
  });

  it('Testa a rota /products/:productId', async function () {
    sinon.stub(productModel, 'findById').resolves(products);
    
    const result = await productService.getProductById(1);
    // console.log(result.message);
    expect(result.message).to.be.deep.equal(products);
  })

  afterEach(sinon.restore);
})