const VideoRepository = require('../repository/VideoRepository');

class VideoService {
  async create(video) {
    const NEW_VIDEO = await VideoRepository.create(video);

    return NEW_VIDEO;
  }
}

module.exports = new VideoService();
