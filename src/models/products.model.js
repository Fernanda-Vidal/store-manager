const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id= ?',
    [productId],
  );

  return result;
};

const insert = async (product) => {  
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product],
  );

  return insertId;
};

const update = async (productId, productName) => connection.execute(
    `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`,
    [productName, productId],
);
  
const deleteProductById = async (productId) => connection.execute(
  `DELETE FROM StoreManager.products
  WHERE id = ?`, [productId],
);

// Pesquisa em: https://www.php.net/manual/en/pdo.prepared-statements.php
const searchProducts = async (q) => {
  const [product] = await connection.execute(
    `SELECT * FROM StoreManager.products
    WHERE (name) LIKE (?)`, [`%${q}%`],
  );

  return product;
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleteProductById,
  searchProducts,
};