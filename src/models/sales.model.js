const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );

  return insertId;
};

const insertSalesProduct = async (productId, quantity, saleId) => connection.execute(
    'INSERT INTO StoreManager.sales_products (product_id, sale_id, quantity) VALUES (?, ?, ?)',
    [productId, saleId, quantity],
  );

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT
    s_p.sale_id AS saleId,
    s.date,
    s_p.product_id AS productId,
    s_p.quantity
    FROM StoreManager.sales_products AS s_p
    INNER JOIN StoreManager.sales AS s
    ON s.id = s_p.sale_id
    ORDER BY sale_id, product_id`,
  );
  return result;
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT
    s.date,
    s_p.product_id AS productId,
    s_p.quantity
    FROM StoreManager.sales_products AS s_p
    INNER JOIN StoreManager.sales AS s
    ON s.id = s_p.sale_id
    WHERE s_p.sale_id = ?
    ORDER BY sale_id, product_id`,
    [saleId],
  );

  return result;
};

const deleteSaleById = async (saleId) => connection.execute(
  `DELETE FROM StoreManager.sales
  WHERE id = ?`, [saleId],
);

const update = async (saleId, productId, quantity) => connection.execute(
  `UPDATE StoreManager.sales_products
  SET quantity = ?
  WHERE sale_id = ? AND product_id = ?`, [quantity, saleId, productId],
);

module.exports = {
  insertSale,
  insertSalesProduct,
  findAll,
  findById,
  deleteSaleById,
  update,
};