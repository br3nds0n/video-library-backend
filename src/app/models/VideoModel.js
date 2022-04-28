const mongoose = require('mongoose');

const SCHEMA = new mongoose.Schema({
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
