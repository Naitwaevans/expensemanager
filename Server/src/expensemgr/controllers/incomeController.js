const pool = require("../../../db");
const queries = require("../queries");

const getIncome = async (req, res) => {
  try {
    const results = await pool.query(queries.getIncome);
    res.send(results.rows);
  } catch (error) {
    if (error) throw error;
    res.status(500).send("Internal Server Error");
  }
};

const getIncomeById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const results = await pool.query(queries.getIncomeById, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const getIncomeByUserId = async (req, res) => {
  const { id } = req.params; // Use 'id' to retrieve the user ID from the URL parameter

  try {
    // Use 'id' to retrieve expenses for the specific user
    const results = await pool.query(queries.getIncomeByUserId, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const addIncome = async (req, res) => {
  const { user_id, amount, date, description, created_at, updated_at, status } =
    req.body;
  try {
    const results = await pool.query(queries.addIncome, [
      user_id,
      amount,
      date,
      description,
      created_at,
      updated_at,
      status,
    ]);
    res.status(201).send("Income Added Successfully");
    console.log(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const removeIncome = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const checkIncome = await pool.query(queries.getIncomeById, [id]);
    if (checkIncome.rows.length === 0) {
      res.send("Income does not exist");
      return;
    }

    // If income exists, remove it
    await pool.query(queries.removeIncome, [id]);
    res.status(200).send("Income Removed Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateIncome = async (req, res) => {
  const id = parseInt(req.params.id);
  const { amount, description } = req.body;

  try {
    const userCheck = await pool.query(queries.getIncomeById, [id]);
    if (userCheck.rows.length === 0) {
      res.send("Income does not exist!");
      return;
    }

    await pool.query(queries.updateIncome, [amount, description, id]);
    res.status(200).send("Income updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getIncome,
  getIncomeById,
  addIncome,
  removeIncome,
  updateIncome,
  getIncomeByUserId,
};
