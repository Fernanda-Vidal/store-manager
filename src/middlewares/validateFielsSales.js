const validateFieldsSales = (req, res, next) => {
  const objectSale = req.body;

  const verifyId = objectSale.every(({ productId }) => productId);
  const verifyQuantity = objectSale.every(({ quantity }) => quantity || quantity === 0);

  // console.log('aaa', aaa);
  if (!verifyId) return res.status(400).json({ message: '"productId" is required' });
  if (!verifyQuantity) return res.status(400).json({ message: '"quantity" is required' });

  return next();
};

module.exports = {
  validateFieldsSales,
};