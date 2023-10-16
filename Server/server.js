const express = require("express");
const usersRoutes = require("../Server/src/expensemgr/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", usersRoutes);

app.listen(port, () => console.log(`app listening to port${port}`));
