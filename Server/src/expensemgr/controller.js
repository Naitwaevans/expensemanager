const pool = require("../../db");
const queries = require("./queries");

const getUsers = async (req, res) => {
  try {
    const results = await query(queries.getUsers);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const results = await query(queries.getUserById, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const addUser = async (req, res) => {
  const { name, email, password, balance, status } = req.body;
  try {
    const emailCheck = await query(queries.checkEmailexists, [email]);
    if (emailCheck.rows.length) {
      res.send("Email Already exists");
      return;
    }

    await query(queries.addUser, [name, email, password, balance, status]);
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const removeUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const userCheck = await query(queries.getUserById, [id]);
    if (userCheck.rows.length === 0) {
      res.send("User does not exist!");
      return;
    }

    await query(queries.removeUser, [id]);
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
    const userCheck = await query(queries.getUserById, [id]);
    if (userCheck.rows.length === 0) {
      res.send("User does not exist!");
      return;
    }

    await query(queries.updateUser, [name, id]);
    res.status(200).send("User updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Helper function to promisify pool.query
function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  updateUser,
};
