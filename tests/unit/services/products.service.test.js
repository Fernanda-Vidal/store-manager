const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { getAllProducts, getProductById } = require('../../../src/services/products.service');
const products = require('./mocks/products.service.mock');

describe('Testes de unidade do service de produtos', function () {
  it('Testa a rota /products', async function () {
    sinon.stub(productModel, 'findAll').resolves(products);

    const result = await getAllProducts();
    expect(result.message).to.be.deep.equal(products)
  });

  it('Testa a rota /products/:productId', async function () {
    sinon.stub(productModel, 'findById').resolves(products);
    console.log(products)
    const result = await getProductById(1);
    expect(result.message).to.be.deep.equal(products[0]);
  })
})