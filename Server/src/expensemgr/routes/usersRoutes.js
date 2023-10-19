const { Router } = require("express");
const controller = require("../controllers/userController");

const router = Router();

//user Routes
router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id", controller.getUserById);
router.delete("/:id", controller.removeUser);
router.put("/:id", controller.updateUser);

module.exports = router;
