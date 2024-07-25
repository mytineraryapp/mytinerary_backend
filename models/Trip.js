const mongoose = require("mongoose");

// maybe use Number for start/end dates?
const TripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  /* activity: [
    {
    name: {type: String, required: true},
    location: {type: String, required: true},
    duration: {type: Number (time?), required: false}
    }
    ] */
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
