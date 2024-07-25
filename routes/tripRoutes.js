const router = require("express").Router();
const { tripCtrl } = require("../controllers");

router.get("/", tripCtrl.getTrips);
router.post("/", tripCtrl.createTrip);

module.exports = router;
