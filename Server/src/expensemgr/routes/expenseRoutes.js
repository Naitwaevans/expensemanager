const { Router } = require("express");
const controller = require("../controllers/expenseController");

const router = Router();

// Expense routes
router.get("/", controller.getExpenses);
router.post("/", controller.addExpense);
router.get("/:id", controller.getExpenseById);
router.delete("/:id", controller.removeExpense);
router.put("/:id", controller.updateExpense);
router.get("/user/:id", controller.getExpensesByUserId);

module.exports = router;
