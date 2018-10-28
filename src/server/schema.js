const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  github: String,
  avatar: String,
});

const Developer = mongoose.model('Developer', Schema);

exports.Developer = Developer;
