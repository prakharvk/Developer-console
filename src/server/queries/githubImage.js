const Boom = require('boom');
const Wreck = require('wreck');

const getProfileImage = async (request, h) => {
  try {
    const { github } = request.payload;
  
    const options = {
      headers: { 'User-Agent': 'hapi-mongo' },
      json: true
    };
  
    const url = `https://api.github.com/users/${github}`;
    const { res, payload } = await Wreck.get(url, options);
    const { status } = res.headers;

    if (status !== "200 OK"){
      return Boom.notFound("Github user is not found");
    }
  
    return payload.avatar_url;
  } catch(e){
    console.error(e);
    return Boom.notFound("Github user is not found");
  }
};

module.exports = { getProfileImage };