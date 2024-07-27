const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: Number, required: false }, //hours
  tripID: {type: String, required: true}
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
