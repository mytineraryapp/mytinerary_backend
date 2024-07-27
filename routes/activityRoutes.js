const router = require("express").Router();
const { activityCtrl } = require("../controllers");

router.get('/', activityCtrl.getAllActivities);
router.get("/:tripID", activityCtrl.getActivities);
router.post("/:tripID", activityCtrl.createActivity);
router.put("/:id", activityCtrl.updateActivity);
router.delete("/:id", activityCtrl.deleteActivity);

module.exports = router;
