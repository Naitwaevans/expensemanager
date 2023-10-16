const pool = require("../../db");
const queries = require("./queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { name, email, password, balance, status } = req.body;
  //check if email exists
  pool.query(queries.checkEmailexists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email Already exists");
    }

    //add user to db
    pool.query(
      queries.addUser,
      [name, email, password, balance, status],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("User created successfully");
      }
    );
  });
};

const removeUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getUserById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send("User does not exit!");
    }
  });
  pool.query(queries.removeUser, [id], (error, results) => {
    if (error) throw error;
    res.status(200).send("User deleted Successfully");
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getUserById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send("User does not exit!");
    }
    pool.query(queries.updateUser, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("User updated successfully");
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  updateUser,
};
