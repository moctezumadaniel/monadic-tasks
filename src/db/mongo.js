const mongoose = require("mongoose");
require("dotenv").config();

let pass = process.env.DB_PASSWORD;
let user = process.env.DB_USER;

async function connectToMongo() {
  try {
    let connection = await mongoose.connect(
      `mongodb+srv://${user}:${pass}@cluster0.mv60osr.mongodb.net/?retryWrites=true&w=majority`
    );
    if (connection){
        console.log("Connected to MongoDB")
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  connectToMongo,
};
