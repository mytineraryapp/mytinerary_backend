const router = require("express").Router();
const tripRoute = require("./tripRoutes");
const activityRoute = require("./activityRoutes");
const userRoute = require("./userRoutes");

router.use("/trips", tripRoute);
router.use("/activities", activityRoute);
router.use("/user", userRoute)
// router.use("/explore", exploreRoute) - Possible routes for exploring top trips/destinations
// ideas here

module.exports = router;
