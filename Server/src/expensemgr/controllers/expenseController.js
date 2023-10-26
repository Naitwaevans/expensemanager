const pool = require("../../../db");
const queries = require("../queries");

const getExpenses = async (req, res) => {
  try {
    const results = await pool.query(queries.getExpenses);
    res.status(200).json(results.rows);
  } catch (error) {
    if (error) throw error;
    res.status(500).send("Internal Server Error");
  }
};

const getExpenseById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const results = await pool.query(queries.getexpenseById, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    if (error) throw error;
    res.status(500).send("Internal Server Error");
  }
};

const addExpense = async (req, res) => {
  const { user_id, amount, description, created_at, updated_at, status } =
    req.body;
  try {
    const results = await pool.query(queries.addExpense, [
      user_id,
      amount,
      description,
      created_at,
      updated_at,
      status,
    ]);
    res.status(201).send("Expense Created successfully");
  } catch (error) {
    if (error) throw error;
    res.status(500).send("Internal Server Error");
  }
};

const removeExpense = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const checkExpense = await pool.query(queries.getexpenseById, [id]);
    if (checkExpense.rows.length === 0) {
      return res.status(404).send("Expense does not exist!");
    }

    const results = await pool.query(queries.removeExpense, [id]);
    return res.status(200).send("Expense Removed Successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateExpense = async (req, res) => {
  const id = parseInt(req.params.id);
  const { amount, description } = req.body;

  try {
    const userCheck = await pool.query(queries.getexpenseById, [id]);
    if (userCheck.rows.length === 0) {
      res.send("Expense does not exist!");
      return;
    }

    await pool.query(queries.updateExpense, [amount, description, id]);
    res.status(200).send("Expense updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getExpensesByUserId = async (req, res) => {
  const { id } = req.params; // Use 'id' to retrieve the user ID from the URL parameter

  try {
    // Use 'id' to retrieve expenses for the specific user
    const results = await pool.query(queries.getExpensesByUserId, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getExpenses,
  getExpenseById,
  addExpense,
  removeExpense,
  updateExpense,
  getExpensesByUserId,
};
