const { Router } = require("express");
const controller = require("../controllers/authController");
const {
  registerValidation,
  loginValidation,
} = require("../../validators/auth");
const {
  validationMiddleware,
} = require("../../middlewares/validations-middleware");
const { userAuth } = require("../../middlewares/auth-middleware");

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

// //protected route
router.get("/protected", userAuth, controller.protected);

//logout
router.get("/logout", controller.logout);

module.exports = router;
