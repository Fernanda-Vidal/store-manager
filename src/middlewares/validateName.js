const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ messege: ' "name" not passed' });

  return next();
};

module.exports = {
  validateName,
};