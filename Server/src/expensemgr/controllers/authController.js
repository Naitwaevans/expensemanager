const pool = require("../../../db");
const queries = require("../queries");
const { hash } = require("bcryptjs");

const login = (req, res) => {
  res.send("Login Route");
  console.log("Login Route");
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    await pool.query(queries.register, [name, email, hashedPassword]);
    console.log("validation passed");
    res.status(201).send("Registration successful");
  } catch (error) {
    console.error(error);

    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  login,
  register,
};
