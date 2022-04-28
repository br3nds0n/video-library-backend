const VideoService = require('../services/VideoService');

class VideoController {
  async create(req, res) {
    try {
      const VIDEO = req.body;
      const RESULT = await VideoService.create(VIDEO);

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

  async findlAll(req, res) {
    try {
      const VIDEO = req.query;
      const RESULT = await VideoService.findAll(VIDEO);

      return res.status(200).json(RESULT);
    } catch (error) {
      return res.status(500).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

module.exports = VideoController;
