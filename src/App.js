const express = require('express');
const cors = require('cors');

const database = require('./infra/database');

class App {
  constructor() {
    this.express = express();

    this.middlewares();
  }

  static async start() {
    const APP = new App();
    await database.connect();

    return APP.express;
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
  }
}

module.exports = App;
