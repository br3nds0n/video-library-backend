const VideoRepository = require('../repository/VideoRepository');

const NotFound = require('../errors/http/NotFound');

class VideoService {
  async create(video) {
    const NEW_VIDEO = await VideoRepository.create(video);

    return NEW_VIDEO;
  }

  async read(video) {
    const ALL_VIDEOS = await VideoRepository.read(video);

    return ALL_VIDEOS;
  }

  async update(id, video) {
    const NEW_VIDEO = await VideoRepository.update(id, video);

    if (!NEW_VIDEO) {
      throw new NotFound(`id '${id}' has not found`);
    }

    return NEW_VIDEO;
  }

  async delete(id) {
    const DELETE_VIDEO = await VideoRepository.delete(id);

    if (!DELETE_VIDEO) {
      throw new NotFound(`id '${id}' has not found`);
    }

    return DELETE_VIDEO;
  }
}

module.exports = new VideoService();
