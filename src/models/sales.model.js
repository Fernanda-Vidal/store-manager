const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );

  return insertId;
};

const insertSalesProduct = async (productId, quantity, saleId) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales_products (product_id, sale_id, quantity) VALUES (?, ?, ?)',
    [productId, saleId, quantity],
  );

  return result;
};

module.exports = {
  insertSale,
  insertSalesProduct,
};