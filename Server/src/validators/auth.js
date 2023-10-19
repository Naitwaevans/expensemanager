const { check } = require("express-validator");
const db = require("../../db");
const queries = require("../expensemgr/queries");
const { compare } = require("bcryptjs");

// Validation for password
const password = check("password")
  .isLength({ min: 5, max: 25 })
  .withMessage("Password must be between 5 and 25 characters.");

// Validation for email format
const email = check("email").isEmail().withMessage("Invalid email address.");

// Check if email exists in the database
const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query(queries.checkEmailexists, [value]);

  if (rows.length) {
    throw new Error("Email already exists.");
  }
});

loginFieldCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query(queries.loginCheck, [value]);
  if (!user.rows.length) {
    throw new Error("Email does not exist");
  }
  const validPassword = await compare(req.body.password, user.rows[0].password);
  if (!validPassword) {
    throw new Error("Invalid Password");
  }
  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFieldCheck],
};
