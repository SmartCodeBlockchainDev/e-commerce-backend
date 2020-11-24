module.exports = (...allowed) => {
  const isAllowed = role => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    if (req.decoded && isAllowed(req.decoded.role)) {
      return next();
    }
    return res.status(403).send({ message: 'Forbidden' });
  };
};
