const db = require("../models");

const getTrips = (req, res) => {
  db.Trip.find({})
  .then((foundTrip) => {
    if(!foundTrip) {
      res.status(404).json({message: 'Cannot find any trips.'})
    } else {
      res.status(200).json({data: foundTrip})
    }
  })
};

const createTrip = (req, res) => {
  db.Trip.create(req.body)
  .then((createdTrip) => {
    if(!createdTrip) {
      res.status(400).json({message: 'cannot create trip'})
    } else {
      res.status(201).json({data: createdTrip, message: 'trip created'})
    }
  })
};

const updateTrip = (req, res) => {
  db.Trip.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatedTrip) => {
    if(!updatedTrip) {
      res.status(400).json({message: 'could not update trip'})
    } else {
      res.status(200).json({data: updatedTrip, message: 'trip updated'})
    }
  })
}

const deleteTrip = (req, res) => {
  db.Trip.findByIdAndDelete(req.params.id)
  .then((deletedTrip) => {
    if(!deletedTrip) {
      res.status(400).json({message: 'could not delete trip.'})
    } else {
      res.status(200).json({data: deletedTrip, message: 'trip deleted.'})
    }
  })
}

module.exports = {
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip
};
