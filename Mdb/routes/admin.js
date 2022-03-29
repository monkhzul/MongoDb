const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const AuthController = require("../controller/AuthController");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);




module.exports = router;
