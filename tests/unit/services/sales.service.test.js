const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/products.model');

const saleModel = require('../../../src/models/sales.model');
const saleService = require('../../../src/services/sales.service')

const mock = require('./mocks/sales.service.mock');

describe('Testes unitários da camada service rota /sales', function () {
  it('Testa adição de uma venda', async function () {
    sinon.stub(saleModel, 'insertSalesProduct').resolves();
    sinon.stub(saleModel, 'insertSale').resolves(87);

    const result = await saleService.addSale(mock.requestSale);
    expect(result.message).to.be.deep.equal(mock.responseSale);
  });
})