const router = require("express").Router()
const { userCtrl } = require("../controllers")

router.post("/", userCtrl.registerUser)


module.exports = router;