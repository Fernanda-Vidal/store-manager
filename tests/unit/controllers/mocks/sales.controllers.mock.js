const type = null;

const mockBody = [
  { "productId": 1, "quantity": 1 },
  { "productId": 2, "quantity": 5 }
];

const allSales =
  [
    {
      "saleId": 1,
      "date": "2022-09-14T20:39:48.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "saleId": 1,
      "date": "2022-09-14T20:39:48.000Z",
      "productId": 2,
      "quantity": 10
    },
    {
      "saleId": 2,
      "date": "2022-09-14T20:39:48.000Z",
      "productId": 3,
      "quantity": 15
    }
  ];

const response = [
  {
    "date": "2022-09-14T20:39:48.000Z",
    "productId": 3,
    "quantity": 15
  }
];

const mockAddSale = { type, message: { id: 5, itemSold: mockBody } };
const mockGetAllSales = { type, message: allSales };
const mockGetSale = { type, message: response };
const mockService = { type, message: '' };

module.exports = {
  mockBody,
  mockAddSale,
  mockGetAllSales,
  mockGetSale,
  mockService,
}