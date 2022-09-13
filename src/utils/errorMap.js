const errorMap = {
  REQUIRED_ID: 400,
  REQUIRED_QUANTITY: 400,
  INVALID_VALUE: 422,
  INVALID_PRODUCT: 404,
  PRODUCT_NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};