require('dotenv').config();
const mongoose = require("mongoose");
const username = process.env.REACT_APP_URI_USERNAME;
const password = process.env.REACT_APP_URI_PASSWORD;
const mongoURI = `mongodb+srv://${username}:${password}@first.ec7pczh.mongodb.net/`;
// const mongoURI = "mongodb://localhost:27017/inotebook";
const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected to mongo Succesfully");
};

module.exports = connectToMongo;