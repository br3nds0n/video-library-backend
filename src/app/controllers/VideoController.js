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

  async read(req, res) {
    try {
      const VIDEO = req.query;
      const RESULT = await VideoService.read(VIDEO);

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

  async update(req, res) {
    try {
      const { id } = req.params;
      const VIDEO = req.body;

      const RESULT = await VideoService.update(id, VIDEO);

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

  async delete(req, res) {
    try {
      const { id } = req.params;
      const RESULT = await VideoService.delete(id);

      return res.status(204).json(RESULT);
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
