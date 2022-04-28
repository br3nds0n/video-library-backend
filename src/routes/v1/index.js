const router = require('express').Router();

const VideoController = require('../../app/controllers/VideoController');

class RouterV1 {
  static v1() {
    router.post('/video', VideoController.create);
    return router;
  }
}

module.exports = RouterV1;
