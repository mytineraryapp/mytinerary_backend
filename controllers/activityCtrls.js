const db = require("../models");

const getAllActivities = (req, res) => {
  db.Activity.find({}).then((foundActivity) => {
    if (!foundActivity) {
      res.status(404).json({ message: 'cannot find any activities.' })
    } else {
      res.status(200).json({ data: foundActivity })
    }
  })
}

const getActivities = (req, res) => {
  db.Activity.find({ tripID: `${req.params.tripID}` }).then((foundActivity) => {
    if (!foundActivity) {
      res.status(404).json({ message: "cannot find any activities." });
    } else {
      res.status(200).json({ data: foundActivity });
    }
  });
};

const createActivity = (req, res) => {
  req.body.tripID = req.params.tripID;
  console.log(req.body);
  db.Activity.create(req.body).then((createdActivity) => {
    if (!createdActivity) {
      res.status(400).json({ message: "cannot create activity" });
    } else {
      res
        .status(201)
        .json({ data: createdActivity, message: "activity created" });
    }
  });
};

const updateActivity = (req, res) => {
  db.Activity.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedActivity) => {
      if (!updatedActivity) {
        res.status(400).json({ message: "could not update activity" });
      } else {
        res
          .status(200)
          .json({ data: updatedActivity, message: "updated activity" });
      }
    }
  );
};

const deleteActivity = (req, res) => {
  db.Activity.findByIdAndDelete(req.params.id).then((deletedActivity) => {
    if (!deletedActivity) {
      res.status(400).json({ message: "could not delete activity" });
    } else {
      res
        .status(200)
        .json({ data: deletedActivity, message: "activity deleted" });
    }
  });
};


module.exports = {
  getAllActivities,
  getActivities,
  createActivity,
  updateActivity,
  deleteActivity,
};
