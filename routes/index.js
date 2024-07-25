const router = require("express").Router();
const tripRoute = require("./tripRoutes");

router.use("/trips", tripRoute);
// router.use("/explore", exploreRoute) - Possible routes for exploring top trips/destinations
// ideas here

module.exports = router;
