const getUsers = "SELECT id, name, email, balance FROM users";
const getUserById = "SELECT id, name, email, balance FROM users WHERE id = $1";
const checkEmailexists = "SELECT s FROM users s WHERE s.email =$1";
const addUser = "INSERT INTO users(name, email, password)VALUES ($1, $2, $3)";
const removeUser = "DELETE FROM users WHERE id =$1";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2";
const loginCheck = "SELECT * FROM users WHERE email = $1";

//Expenses Queries
const getExpenses = "SELECT * FROM expense";
const getexpenseById = "SELECT * FROM expense WHERE id = $1";
const addExpense =
  "INSERT INTO expense(user_id, amount, description, created_at, updated_at, status) VALUES ($1,$2, $3, $4, $5, $6)";
const removeExpense = "DELETE FROM expense WHERE id = $1";
const updateExpense =
  "UPDATE expense SET amount = $1, description = $2 WHERE id = $3";

//income Queries
const getIncome = "SELECT * FROM income";
const getIncomeById = "SELECT * FROM income WHERE id = $1";
const addIncome =
  "INSERT INTO income (user_id,amount, date, description, created_at, updated_at, status) VALUES ($1,$2,$3,$4, $5,$6, $7)";
const removeIncome = "DELETE FROM income WHERE id=$1";
const updateIncome =
  "UPDATE expense SET amount = $1, description = $2 WHERE id = $3";

//Login and Register queries
const register =
  "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";

module.exports = {
  getUsers,
  addUser,
  getUserById,
  checkEmailexists,
  removeUser,
  updateUser,
  getExpenses,
  getexpenseById,
  addExpense,
  removeExpense,
  updateExpense,
  getIncome,
  getIncomeById,
  addIncome,
  removeIncome,
  updateIncome,
  register,
  loginCheck,
};
