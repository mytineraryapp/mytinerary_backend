const router = require("express").Router();
const { activityCtrl } = require("../controllers");

router.get('/', activityCtrl.getActivities);
router.post('/', activityCtrl.createActivity);
router.put('/:id', activityCtrl.updateActivity);
router.delete('/:id', activityCtrl.deleteActivity);

module.exports = router;
