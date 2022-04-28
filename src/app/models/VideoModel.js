const mongoose = require('mongoose');

const SCHEMA = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  },
});

const VIDEO = mongoose.model('Video', SCHEMA);

module.exports = VIDEO;
