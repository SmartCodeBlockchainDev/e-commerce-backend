const { celebrate, Joi } = require('celebrate');

module.exports = {
  signup: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.number().integer(),
      role: Joi.string().default('admin')
    }),
  }),
  login: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.number().integer(),
      role: Joi.string().default('admin')
    }),
  }),
}
