import cors from "cors";
import { mongoDbURL, PORT } from "./config.js";
import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // or whatever port your frontend runs on
  })
);

app.use(express.json());

app.use("/api/todos", todoRoutes);
mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.headers);
  return res.status(234).send("hello world");
});
