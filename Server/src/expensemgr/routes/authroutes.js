const { Router } = require("express");
const controller = require("../controllers/authController");
const {
  registerValidation,
  loginValidation,
} = require("../../validators/auth");
const {
  validationMiddleware,
} = require("../../middlewares/validations-middleware");

const router = Router();

// Login route
router.post("/login", loginValidation, validationMiddleware, controller.login);

//Register Route
router.post(
  "/register",
  registerValidation,
  validationMiddleware,
  controller.register
);

module.exports = router;
