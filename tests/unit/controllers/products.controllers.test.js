const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productService } = require('../../../src/services');
const productControllers = require('../../../src/controllers/products.controller');

const products = require('./mocks/products.controllers.mock');

describe('Testes de unidade do controller de produtos', function () {
  it('Testa a rota /products', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getAllProducts').resolves(products);

    await productControllers.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testa a rota /products/:productId', async function () {
    const res = {};
    const req = 1;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProductById').resolves(products);

    await productControllers.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
  })
})