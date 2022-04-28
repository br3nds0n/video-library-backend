const router = require('express').Router();

const VideoController = require('../../app/controllers/VideoController');

class RouterV1 {
  static v1() {
    const controller = new VideoController();

    router.post('/video', controller.create);
    return router;
  }
}

module.exports = RouterV1;
