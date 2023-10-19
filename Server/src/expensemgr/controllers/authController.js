const pool = require("../../../db");
const queries = require("../queries");

const login = (req, res) => {
  res.send("Login Route");
  console.log("Login Route");
};

const signUp = (req, res) => {
  res.send("Signup Route");
  console.log("Signup Route");
};

module.exports = {
  login,
  signUp,
};
