const express = require("express");

//import routes
const usersRoutes = require("./src/expensemgr/routes/usersRoutes");
const expenseRoutes = require("./src/expensemgr/routes/expenseRoutes");
const incomeRoutes = require("./src/expensemgr/routes/incomeRoutes");
const loginRoutes = require("./src/expensemgr/routes/authroutes");

const app = express();
const { PORT } = require("./src/constants/index");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//User Routes
app.use("/api/v1/users", usersRoutes);

//Expenses Routes
app.use("/api/v1/expenses", expenseRoutes);

//Income Routes
app.use("/api/v1/income", incomeRoutes);

//Login Routes
app.use("/api/v1/auth", loginRoutes);

app.listen(PORT, () => console.log(`app listening to port${PORT}`));
