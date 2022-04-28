const VideoRepository = require('../repository/VideoRepository');

class VideoService {
  async create(video) {
    const NEW_VIDEO = await VideoRepository.create(video);

    return NEW_VIDEO;
  }

  async findAll(video) {
    const ALL_VIDEOS = await VideoRepository.findAll(video);

    return ALL_VIDEOS;
  }
}

module.exports = new VideoService();
