const express = require("express");

const router = express.Router();

const todoListControllers = require("./controllers/todoListControllers");
const userControllers = require("./controllers/userControllers");

router.get("/tasks", todoListControllers.browse);
router.get("/tasks/:id", todoListControllers.read);
router.put("/tasks/:id", todoListControllers.edit);
router.post("/tasks", todoListControllers.add);
router.delete("/tasks/:id", todoListControllers.destroy);

router.get("/user", userControllers.browse);
router.post("/user", userControllers.getUserByEmailWithPassword);

module.exports = router;
