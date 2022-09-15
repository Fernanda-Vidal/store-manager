const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productService = require('../../../src/services/products.service');
const productControllers = require('../../../src/controllers/products.controller');

const { products, mockAddProduct, newProduct, mockService, updateProduct } = require('./mocks/products.controllers.mock');

describe('Testes unitários da camada controller rota /products', function () {
  afterEach(sinon.restore);
  it('Testa se é possível listar todos os produtos', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getAllProducts').resolves(products);

    await productControllers.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testa se é possível listar um produto por id', async function () {
    const res = {};
    const req = { params: { productId: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProductById').resolves(products);

    await productControllers.getProductById(req, res);

    expect(res.status).to.be.been.calledWith(200);
  });

  it('Testa se é possível cadastrar um novo produto', async function () {
    const res = {};
    const req = { body: { name: 'Um anel' } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'addProduct').resolves(mockAddProduct);

    await productControllers.createProduct(req, res);

    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it('Testa se é possível atualizar um produto', async function () {
    const res = {};
    const req = { params: { productId: 1 }, body: { name: 'Anel de Sauron' } };
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'updateProduct').resolves(mockService);

    await productControllers.callUpdateProduct(req, res);

    expect(res.json).to.have.been.calledWith(updateProduct)
  });

  it('Testa se é possível deletar um produto', async function () {
    const res = {};
    const req = { params: { productId: 2 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'deleteProduct').resolves(mockService);

    await productControllers.callDeleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
  })
})