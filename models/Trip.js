const mongoose = require("mongoose");

// maybe use Number for start/end dates?
const TripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  startMonth: {
    type: Number,
    required: true,
  },
  startDay: {
    type: Number,
    required: true,
  },
  endMonth: {
    type: Number,
    required: true,
  },
  endDay: {
    type: Number,
    required: true,
  },
  activities: Array,
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
