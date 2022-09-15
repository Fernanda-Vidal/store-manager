const products = {
  type: null,
  message:
  [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
]};

const newProduct = { id: 42, name: 'Um anel' };
const updateProduct = { id: 1, name: 'Anel de Sauron' };

const mockAddProduct = { type: null, message: 42 };
const mockService = { type: null, message: '' };

module.exports = {
  products,
  newProduct,
  mockAddProduct,
  mockService,
  updateProduct,
}