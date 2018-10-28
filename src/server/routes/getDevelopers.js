
const Boom = require('boom');

const Developer = require('../schema').Developer;

module.exports = {
  method: 'GET',
  path: '/api/developers',
  config: {
    handler: async (request, h) => {

      const res = await Developer.find({});

      console.log(res.length);
      if (res.length === 0) {
        return Boom.notFound('There is no developer').code(404);
      }

      return h.response({ res, statusCode: 200 }).code(200);
    },
  }
};
