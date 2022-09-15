const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: String,
  status: String,
});

const taskModel = new mongoose.model("Task", taskSchema);

module.exports = {
  taskModel,
};
