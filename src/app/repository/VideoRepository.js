const VideoModel = require('../models/VideoModel');

class VideoRepository {
  constructor() {
    this.videoModel = VideoModel;
  }

  async create(video) {
    const NEW_VIDEO = await this.videoModel.create(video);

    return NEW_VIDEO;
  }
}

module.exports = VideoRepository;
