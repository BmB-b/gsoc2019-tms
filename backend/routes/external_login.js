const express = require("express");
const router = express.Router();

const ExternalController = require('../controllers/external_login');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", ExternalController.user_signup);

router.post("/login", ExternalController.user_login);

router.delete("/:userId", checkAuth, ExternalController.user_delete);

module.exports = router;
