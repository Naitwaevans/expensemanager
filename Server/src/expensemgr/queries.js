const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailexists = "SELECT s FROM users s WHERE s.email =$1";
const addUser =
  "INSERT INTO users(name, email, password, balance, status)VALUES ($1, $2, $3, $4, $5)";
const removeUser = "DELETE FROM users WHERE id =$1";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
  getUsers,
  addUser,
  getUserById,
  checkEmailexists,
  removeUser,
  updateUser,
};
