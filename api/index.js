import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO
).then(() => {
    console.log("the app connected to mongodb successfully");
}).catch((e) => {
    console.log(e);
});

const app = express();

app.listen(3000, () => {
  console.log("Server is runing on port 3000!");
});
