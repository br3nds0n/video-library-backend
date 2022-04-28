const router = require('express').Router();

const VideoController = require('../../app/controllers/VideoController');

class RouterV1 {
  static v1() {
    const controller = new VideoController();

    router
      .post('/video', controller.create)
      .get('/video', controller.read)
      .put('/video/:id', controller.update)
      .delete('/video/:id', controller.delete)
      .patch('/video/:id', controller.updateLiked);

    return router;
  }
}

module.exports = RouterV1;
