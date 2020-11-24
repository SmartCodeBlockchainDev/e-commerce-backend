const { celebrate, Joi } = require('celebrate');
const { ENUM_GENDER } = require('../utils/const');

module.exports = {
  update: celebrate({
    body: Joi.object().keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string(),
      password: Joi.string(),
      birth_date: Joi.date(),
      gender: Joi.string().valid(ENUM_GENDER),
    }),
  }),
}
