const { celebrate, Joi } = require('celebrate');
const { ENUM_GENDER } = require('../utils/const');

module.exports = {
  signup: celebrate({
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      birth_date: Joi.date(),
      gender: Joi.string().valid(ENUM_GENDER).required(),
    }),
  }),
  login: celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
}
