const { registerUser, loginUser } = require("../controller/Controller");
const Auth = require("../model/Model");
const express  = require('express')
const router = express.Router();

router.post('/register_user', registerUser);
router.post('/login_user', loginUser);
module.exports = router;