const VideoModel = require('../models/VideoModel');

class VideoRepository {
  async create(video) {
    const NEW_VIDEO = await VideoModel.create(video);

    return NEW_VIDEO;
  }

  async findAll(video) {
    const ALL_VIDEOS = await VideoModel.find(video);

    return ALL_VIDEOS;
  }
}

module.exports = new VideoRepository();
