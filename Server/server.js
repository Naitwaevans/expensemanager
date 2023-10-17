const express = require("express");
const usersRoutes = require("./src/expensemgr/usersRoutes");
const expenseRoutes = require("./src/expensemgr/expenseRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//User Routes
app.use("/api/v1/users", usersRoutes);

//Expenses Routes
app.use("/api/v1/expenses", expenseRoutes);

app.listen(port, () => console.log(`app listening to port${port}`));
