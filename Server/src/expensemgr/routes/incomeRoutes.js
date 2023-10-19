const { Router } = require("express");
const controller = require("../controllers/incomeController");

const router = Router();

//Routes
router.get("/", controller.getIncome);
router.get("/:id", controller.getIncomeById);
router.post("/", controller.addIncome);
router.delete("/:id", controller.removeIncome);
router.put("/:id", controller.updateIncome);

module.exports = router;
