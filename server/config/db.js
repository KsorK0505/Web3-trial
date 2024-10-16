const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.mongoURI;
console.log("dbname",db)
const connectDB = async () => {
  try {
    console.log("here....................")
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MonogoDB Connection failed', err);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
