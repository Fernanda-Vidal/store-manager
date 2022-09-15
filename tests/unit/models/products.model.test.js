const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/products.model');

const { products } = require('./mocks/products.model.mock');

describe('Testes de unidade do model', function () {
  afterEach(sinon.restore);
  it('Testa a rota /products', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productModel.findAll();
    expect(result).to.be.deep.equal(products);
  });

  it('Testa a rota /products/:productId', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productModel.findById(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  it('Testa se é possível cadastrar um produto no db', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const result = await productModel.insert(products);
    expect(result).to.equal(4);
  })

})

