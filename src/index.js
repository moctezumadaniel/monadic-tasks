const express = require("express");
const app = express();
const cors = require("cors");
const { connectToMongo } = require("../src/db/mongo");
const { taskRouter } = require("./tasks/routes");


connectToMongo()
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("Serving app");
});
