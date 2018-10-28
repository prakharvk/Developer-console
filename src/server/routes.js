const db = require('./database').db;
const Developer = require('./schema').Developer;

module.exports = [
  {
    method: 'GET',
    path: '/api/developers',
    handler: async (request, h) => {
      const res = await Developer.find({});
      return res;
    }
  },
  {
    method: 'GET',
    path: `/api/developer/{username}`,
    handler: async (request, h) => {
      const username = request.params.username;
      const res = await Developer.find({ username: username});
      return res;
    }
  },
  {
    method: 'POST',
    path: '/api/create',
    handler: async (request, h) => {
      const {email, name, username} = request.payload;
      
      const isDeveloper = await Developer.find({username: username});
      
      if(isDeveloper.length !== 0){
        return h.response({message:"username should be unique",statusCode:400}).code(400);
      }
      
      const newDeveloper = new Developer({
        name,
        email,
        username,
      });

      const res = await newDeveloper.save();
      return h.response(res).code(201);
    }
  },
  {
    method: 'DELETE',
    path: '/api/developer/id',
    handler: (request, h) => {
      return "Delete"
    }
  },
];