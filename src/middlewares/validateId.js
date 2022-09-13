const validateId = (req, res, next) => {
  const { productId } = req.params;

  if (!productId) return res.status(400).json({ message: '"productId" is required' });

  return next();
};

module.exports = {
  validateId,
};