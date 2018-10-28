
const Boom = require('boom');
const Developer = require('../schema').Developer;

const { verifyUniqueDeveloper } = require('../queries/uniqueDeveloper');
const { getProfileImage } = require('../queries/githubImage');
const { payloadValidator } = require('../validations/postDeveloper');

module.exports = {
  method: 'POST',
  path: '/api/create',
  config: {
    pre: [
      { method: verifyUniqueDeveloper },
      { method: getProfileImage, assign: "githubImage" }
    ],
    handler: async (request, h) => {
      try{
        const { email, name, username, github } = request.payload;
        const avatar = request.pre.githubImage;
  
        const newDeveloper = new Developer({
          name,
          email,
          username,
          github,
          avatar,
        });
  
        const res = await newDeveloper.save();

        return h.response(res).code(201);
      } catch(e){
        console.error(e);
        return Boom.badRequest('Some Error occured');
      }
    },
    validate: {
      payload: payloadValidator
    }
  }
};
