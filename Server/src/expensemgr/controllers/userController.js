const pool = require("../../../db");
const queries = require("../queries");
const { hash } = require("bcryptjs");

const getUsers = async (req, res) => {
  try {
    const results = await pool.query(queries.getUsers);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const results = await pool.query(queries.getUserById, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  try {
    const emailCheck = await pool.query(queries.checkEmailexists, [email]);
    if (emailCheck.rows.length) {
      res.send("Email Already exists");
      return;
    }

    await pool.query(queries.addUser, [name, email, hashedPassword]);
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const removeUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const userCheck = await pool.query(queries.getUserById, [id]);
    if (userCheck.rows.length === 0) {
      res.send("User does not exist!");
      return;
    }

    await pool.query(queries.removeUser, [id]);
    res.status(200).send("User deleted Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  try {
    const userCheck = await pool.query(queries.getUserById, [id]);
    if (userCheck.rows.length === 0) {
      res.send("User does not exist!");
      return;
    }

    await pool.query(queries.updateUser, [name, id]);
    res.status(200).send("User updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  updateUser,
};
