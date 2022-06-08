/**
    @abstract This is the entry point of the cat router module
 */

import { Router } from "express";
import catRouter from "./cat.routes.js";

const catIndexRouter = Router({ caseSensitive: true });

catIndexRouter.use("/cat", catRouter);

export default catIndexRouter;
