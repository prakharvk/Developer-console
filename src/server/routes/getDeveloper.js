
const Boom = require('boom');

const Developer = require('../schema').Developer;

const { paramsValidator } = require('../validations/getDeveloper');

module.exports = {
  method: 'GET',
  path: '/api/developers/{username}',
  config: {
    handler: async (request, h) => {

      const username = request.params.username;

      const res = await Developer.find({ username: username });
      
      console.log(res.length);
      if(res.length === 0){
        return Boom.notFound('Developer not found!').code(404);
      }

      return h.response({ res, statusCode: 200 }).code(200);
    },
    validate: {
      params: paramsValidator
    }
  }
};
