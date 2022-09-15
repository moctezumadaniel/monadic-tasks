const { taskModel } = require("../models");
const TaskStatus = {
  PENDING: true,
  DONE: true,
};
async function createTask(req, res) {
  let { task: taskDescription } = req.body;

  let task = new taskModel({
    task: taskDescription,
    status: "PENDING",
  });

  try {
    let doc = await task.save();
    res.json(doc);
  } catch (err) {
    res.status(500);
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;

  try {
    let updatedTask = await taskModel.deleteOne({ _id: id });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateTask(req, res) {
  const { id } = req.params;
  const task = req.body;
  let filter = { _id: id };
  let update = { task: task.task, status: task.status };

  if (!TaskStatus[task.status]) {
    res.status(400).send("Status not allowed");
  }

  try {
    let updatedTask = await taskModel.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function readTasks(req, res) {
  try {
    let tasks = await taskModel.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  createTask,
  deleteTask,
  updateTask,
  readTasks,
};
