const express = require("express");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const { PORT, CLIENT_URL } = require("./src/constants/index");
require("./src/middlewares/passport-middleware");

//import routes
const usersRoutes = require("./src/expensemgr/routes/usersRoutes");
const expenseRoutes = require("./src/expensemgr/routes/expenseRoutes");
const incomeRoutes = require("./src/expensemgr/routes/incomeRoutes");
const loginRoutes = require("./src/expensemgr/routes/authroutes");

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors({ origin: CLIENT_URL, credentials: true }));

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
