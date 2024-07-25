const db = require("../models");

const getTrips = (req, res) => {
  // db.Trips.find({})
  res.send("getTrips");
};

const createTrip = (req, res) => {
  // db.Trips.create({title: 'test})
  // .then((res) => {console.log(res)})
  res.send("createTrip");
};

module.exports = {
  getTrips,
  createTrip,
};
