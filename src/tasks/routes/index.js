const express = require("express");
const {
  createTask,
  deleteTask,
  updateTask,
  readTasks,
} = require("../controllers");

const taskRouter = express.Router();

taskRouter.post("/", createTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.put("/:id", updateTask);
taskRouter.get("/", readTasks);

module.exports = {
  taskRouter,
};
