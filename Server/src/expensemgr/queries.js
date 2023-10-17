const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailexists = "SELECT s FROM users s WHERE s.email =$1";
const addUser =
  "INSERT INTO users(name, email, password, balance, status)VALUES ($1, $2, $3, $4, $5)";
const removeUser = "DELETE FROM users WHERE id =$1";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2";

//Expenses Queries
const getExpenses = "SELECT * FROM expense";
const getexpenseById = "SELECT * FROM expense WHERE id = $1";
const addExpense =
  "INSERT INTO expense(user_id, amount, description, created_at, updated_at, status) VALUES ($1,$2, $3, $4, $5, $6)";
const removeExpense = "SELECT FROM expense WHERE id = $1";
const updateExpense =
  "UPDATE expense SET amount = $1, description = $2 WHERE id = $3";

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
};
