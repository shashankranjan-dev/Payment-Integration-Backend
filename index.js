const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

// //Import Routes

app.use(cors());

const port = process.env.PORT || 5000;

// const MongoDBURI = "mongodb+srv://shashank:M3y3pnUtCvHIcaVP@cluster0.v45jfaq.mongodb.net/?retryWrites=true&w=majority"
const uri =
  "mongodb+srv://Shashank:bYkgnwIYMfHqmoKk@cluster0.wtnl1jl.mongodb.net/?retryWrites=true&w=majority";

// //Connect to DB command
mongoose.connect(uri, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

// Callback function to listen to changes unless manually exited.
app.listen(port, () => {
  console.log(`Welcome to the tech world at PORT: ${port}`);
});
//the end
