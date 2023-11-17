const pool = require("../../../db");
const queries = require("../queries");
const { hash } = require("bcryptjs");
const { sign, decode } = require("jsonwebtoken");
const { SECRET } = require("../../constants/index.js");

const login = async (req, res) => {
  let user = req.user;
  let payload = {
    id: user.id,
    email: user.email,
  };
  try {
    const token = await sign(payload, SECRET);
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      id: user.id,
      token,
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    await pool.query(queries.register, [name, email, hashedPassword]);
    res.status(201).send({
      message: "Registration successful",
    });
  } catch (error) {
    console.error(error);

    res.status(500).send("Internal Server Error");
  }
};

const protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "Protected info",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  login,
  register,
  protected,
  logout,
};
