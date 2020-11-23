const { celebrate, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.number().integer(),
      role: Joi.string().default('admin')
    }),
  }),
}
