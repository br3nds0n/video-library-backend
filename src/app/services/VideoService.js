const VideoRepository = require('../repository/VideoRepository');

class VideoService {
  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async create(video) {
    const NEW_VIDEO = await this.videoRepository.create(video);

    return NEW_VIDEO;
  }
}

module.exports = VideoService;
