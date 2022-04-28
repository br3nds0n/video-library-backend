const VideoModel = require('../models/VideoModel');

class VideoRepository {
  async create(video) {
    const NEW_VIDEO = await VideoModel.create(video);

    return NEW_VIDEO;
  }
}

module.exports = new VideoRepository();
