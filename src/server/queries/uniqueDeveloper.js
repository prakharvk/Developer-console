const Boom = require('boom');
const Developer = require('../schema').Developer;


const verifyUniqueDeveloper = async (request, h) => {
  try{
    const { username } = request.payload;
  
    const isDeveloper = await Developer.find({ username: username });
  
    if (isDeveloper.length !== 0) {
      return Boom.badRequest('Developers exists');
    }
  
    return h;
  } catch(e){
    console.error(e);
    return Boom.badRequest('Developers exists');
  }
};

module.exports = { verifyUniqueDeveloper };