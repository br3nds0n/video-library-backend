const router = require('express').Router();

const routes = require('./v1');

class Routes {
  static init() {
    router.use('/v1', routes.v1());

    return router;
  }
}

module.exports = Routes;
