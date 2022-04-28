const mongoose = require('mongoose');

class Database {
  static async connect() {
    try {
      const URI = process.env.DATABASE_URI;

      await mongoose.connect(URI);
      console.log('📦 Connected to database!');
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = Database;
