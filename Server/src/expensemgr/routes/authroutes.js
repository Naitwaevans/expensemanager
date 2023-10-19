const { Router } = require("express");
const controller = require("../controllers/authController");

const router = Router();

// Routes
router.post("/login", controller.login);
router.post("/signup", controller.signUp);

module.exports = router;
