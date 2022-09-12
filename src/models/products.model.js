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
  console.log('model', result);
  return result;
};

module.exports = {
  findAll,
  findById,
};