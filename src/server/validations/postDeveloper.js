const Joi = require('joi');

const payloadValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  github: Joi.string(),
});

module.exports = { payloadValidator };
