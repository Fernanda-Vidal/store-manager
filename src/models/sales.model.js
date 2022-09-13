const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );

  return insertId;
};

const insertSalesProduct = async (productId, quantity, saleId) => {
  console.log('entrou na model');
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales_products (product_id, sale_id, quantity) VALUES (?, ?, ?)',
    [productId, saleId, quantity],
  );

  return result;
};

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT
    sa_pro.sale_id AS saleId,
    sales.date,
    sa_pro.product_id AS productId,
    sa_pro.quantity
    FROM StoreManager.sales_products AS sa_pro
    INNER JOIN StoreManager.sales AS sales
    ON sales.id = sa_pro.sale_id
    ORDER BY sale_id, product_id`,
  );
  return result;
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT
    sa_pro.sale_id AS saleId,
    sales.date,
    sa_pro.product_id AS productId,
    sa_pro.quantity
    FROM StoreManager.sales_products AS sa_pro
    INNER JOIN StoreManager.sales AS sales
    ON sales.id = sa_pro.sale_id
    WHERE sa_pro.sale_id = ?
    ORDER BY sale_id, product_id`,
    [saleId],
  );
  console.log('model', result);

  return result;
};

module.exports = {
  insertSale,
  insertSalesProduct,
  findAll,
  findById,
};