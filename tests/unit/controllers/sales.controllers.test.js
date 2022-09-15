const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const saleService = require('../../../src/services/sales.service');
const saleControllers = require('../../../src/controllers/sales.controller');

const { mockBody, mockAddSale, mockGetAllSales, mockGetSale, mockService } = require('./mocks/sales.controllers.mock');

describe('Testes unitários da camada controller rota /sales', function () {
  afterEach(sinon.restore);
  it('Testa se é possível cadastrar uma venda', async function () {
    const res = {};
    const req = { body: mockBody };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'addSale').resolves(mockAddSale);

    await saleControllers.createSale(req, res);

    expect(res.json).to.have.been.calledWith(mockAddSale.message)
  });

  it('Testa se é possível listar todas as vendas', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'getAllSales').resolves(mockGetAllSales);

    await saleControllers.callSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockGetAllSales.message);
  });

  it('Testa se é possível listar uma venda por id', async function () {
    const res = {};
    const req = { params: { saleId: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'getSaleById').resolves(mockGetSale);

    await saleControllers.callSaleById(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testa se é possível deletar uma venda', async function () {
    const res = {};
    const req = { params: { saleId: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'deleteSale').resolves(mockService);

    await saleControllers.callDeleteSales(req, res);

    expect(res.status).to.have.been.calledWith(204);
  });

  it('Testa se é possível atualizar uma venda', async function () {
    const res = {};
    const req = { params: { saleId: 1 }, body: mockBody };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(saleService, 'updateSale').resolves(mockService);

    await saleControllers.callUpdateSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
  })
})