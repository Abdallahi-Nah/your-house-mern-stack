import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("the app connected to mongodb successfully");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is runing on port 3000!");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
