
const Joi = require('joi');

const paramsValidator = Joi.object({
  username: Joi.string()
});

module.exports = { paramsValidator };
