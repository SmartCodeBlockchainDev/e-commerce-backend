const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config');
const BackendError = require('../errors/BackendError');

module.exports = {
  create: (body) => User.create(body),

  findAll: () => User.find().exec()
    .then((users) => users)
    .catch((err) => { throw new BackendError(err); }),

  updateById: (idUser, update) => User.findOneAndUpdate(
    { _id: idUser }, update, { new: true },
  ).exec()
    .then((user) => user)
    .catch((err) => { throw new BackendError(err); }),

  generateToken: (user) => {
    const newUser = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
    };
    return jwt.sign(newUser, config.SECRET_KEY);
  },

  findById: (id) => User.findOne({ _id: id, isActive: true })
    .then((parent) => parent)
    .catch((err) => {
      throw new BackendError(err);
    }),

  findByEmail: (email) => User.findOne({ email, isActive: true }).exec()
    .then((user) => user)
    .catch((err) => {
      throw new BackendError(err)
    }),

  validatePassword: (user, password) => new Promise((resolve, reject) => {
    user.comparePassword(password, (err, isMatch) => {
      if (err) reject(err);
      return resolve(isMatch);
    });
  }),

};
