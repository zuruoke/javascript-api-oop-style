/**
  @abstract Import all global dependencies;
 */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import catIndexRouter from "./routes/cat_routes/index.routes.js";
import { httpStatusCodes } from "./helpers/httpStatusCodes.js";

// intialize the environmental config values
dotenv.config();

// Set up the express app
export const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable cors for browser non-origin access
app.use(cors());

// Require our routes into the application.
app.use("/", catIndexRouter);

// middleware for global error handling
app.use((error, _, res, next) => {
  res.status(error.statusCode || httpStatusCodes.INTERNAL_SERVER).send({
    message: error.name || error.description || "Something went wrong",
  });
});

// 404 page
app.use((_, res) => {
  res.status(404).send("route not found");
});
