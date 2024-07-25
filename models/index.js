const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;

async function connectToMongo() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to mongodb");
  } catch (err) {
    console.error("Connection error: ", err.message);
  }
}

connectToMongo();

module.exports = {
    Trip: require('./Trip')
}