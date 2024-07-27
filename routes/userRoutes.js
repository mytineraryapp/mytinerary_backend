const router = require("express").Router();
const { userCtrl } = require("../controllers");
const auth = require("../auth")

router.post("/register", userCtrl.registerUser);
router.post("/login", userCtrl.loginUser);
router.get("/free-endpoint", userCtrl.freeEndpoint);
router.get("/auth-endpoint", auth, userCtrl.authEndpoint);

module.exports = router;
