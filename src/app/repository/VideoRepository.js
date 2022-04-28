const VideoModel = require('../models/VideoModel');

class VideoRepository {
  async create(video) {
    const NEW_VIDEO = await VideoModel.create(video);

    return NEW_VIDEO;
  }

  async read(video) {
    const ALL_VIDEOS = await VideoModel.find(video);

    return ALL_VIDEOS;
  }

  async update(id, video) {
    const NEW_VIDEO = await VideoModel.findByIdAndUpdate(id, video, { new: true });

    return NEW_VIDEO;
  }
}

module.exports = new VideoRepository();
