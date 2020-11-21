const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    } else {
      return res.status(403).send({ message: 'Auth token dont init with the word' });
    }
    return jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).send({ message: 'Token is not valid' });
      }
      req.decoded = decoded;
      return next();
    });
  }
  return res.status(403).send({ message: 'Auth token is not supplied' });
};
