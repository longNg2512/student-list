import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./API/Router/studentRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;
const URI = "mongodb://0.0.0.0/test";
app.use(cors());
app.use(bodyParser.json());
app.use(router);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to DB !!!");
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
