const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    if (token.startsWith('JWT ')) {
      token = token.slice(4, token.length);
      console.log(token);
    } else {
      return res.status(403).send({ message: 'Auth token dont init with the word' });
    }
    return jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(403).send({ message: 'Token is not valid' });
      }
      req.decoded = decoded;
      return next();
    });
  }
  return res.status(403).send({ message: 'Auth token is not supplied' });
};
