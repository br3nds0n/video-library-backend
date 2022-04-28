const VideoService = require('../services/VideoService');

class VideoController {
  constructor() {
    this.videoService = new VideoService();
  }

  async create(req, res) {
    try {
      const VIDEO = req.body;
      const RESULT = await this.videoService.create(VIDEO);

      return res.status(201).json(RESULT);
    } catch (error) {
      return res.status(400).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

module.exports = new VideoController();
