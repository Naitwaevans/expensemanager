const { Router } = require("express");
const controller = require("./expenseController");

const router = Router();

// Expense routes
router.get("/", controller.getExpenses);
router.post("/", controller.addExpense);
router.get("/:id", controller.getExpenseById);
router.delete("/:id", controller.removeExpense);
router.put("/:id", controller.updateExpense);

module.exports = router;
