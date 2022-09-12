const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/products.model');

const { products } = require('./mocks/products.model.mock');

describe('Testes de unidade do model de produtos', function () {
  it('Testa a rota /products', async function () {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productModel.findAll();
    console.log('teste1', result)
    expect(result).to.be.deep.equal(products);
  });

  // it('Verifica se retorna erro ao buscar um id inexistente', async function () {
  //   sinon.stub(connection, 'execute').resolves([[products]]);

  //   const result = await productModel.findById(3);
  //   console.log('teste2', result)
  //   expect(result).to.be.equal({ message: 'Product not found' });
  // });

  it('Testa a rota /products/:productId', async function () {
    sinon.stub(connection, 'execute').resolves([[products]]);

    const result = await productModel.findById(3);
    console.log('teste3', result)
    expect(result).to.be.deep.equal(products[0]);
  });

  afterEach(sinon.restore);
})

