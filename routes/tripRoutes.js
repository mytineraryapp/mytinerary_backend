const router = require("express").Router();
const { tripCtrl } = require("../controllers");

router.get("/", tripCtrl.getTrips);
router.post("/", tripCtrl.createTrip);
router.put('/:id', tripCtrl.updateTrip);
router.delete('/:id', tripCtrl.deleteTrip);

module.exports = router;
