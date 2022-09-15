const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../src/models/products.model');
const productService = require('../../../src/services/products.service');

const products = require('./mocks/products.service.mock');

describe('Testes unitários da camada service rota /products', function () {
  it('Testa consulta ao banco para listar produtos', async function () {
    sinon.stub(productModel, 'findAll').resolves(products);

    const result = await productService.getAllProducts();
    expect(result.message).to.be.deep.equal(products)
  });

  it('Testa consulta ao banco para listar produtos por id', async function () {
    sinon.stub(productModel, 'findById').resolves(products);
    
    const result = await productService.getProductById(1);
    expect(result.message).to.be.deep.equal(products);
  });

  it('Testa adição de produto', async function () {
    sinon.stub(productModel, 'insert').resolves(50);
    
    const result = await productService.addProduct('Anel de Sauron');
    expect(result.message).to.be.equal(50);
  });

  it('Testa a atualização de um produto', async function () {
    const name = 'Pedra da Lua';
    sinon.stub(productModel, 'update').resolves();
    
    const result = await productService.updateProduct(name, 1);
    expect(result.type).to.be.equal(null);
  });

  it('Testa a exclusão de um produto', async function () {
    sinon.stub(productModel, 'deleteProductById').resolves();

    const result = await productService.deleteProduct(2);
    expect(result.type).to.be.equal(null);
  });
 
  afterEach(sinon.restore);
})