/**
  @abstract This module performs two main functionalities;
 *
  @Dependency Injection;
  @Middleware Creation;
 */

import { Router } from "express";
import CatController from "../../controllers/cat.controller.js";
import CatModel from "../../models/cat.model.js";
import CatService from "../../services/cat.service.js";

/**
  @abstract High order function for global error handling;
  @abstract Route all calls through this to try and handle errors;
 */

const use = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

const catRouter = Router();
const catService = new CatService(CatModel); // dependency injection
const catController = new CatController(catService); // dependency injection

catRouter.get("/", use(catController.get)); // middleware
catRouter.get("/:id", use(catController.getById)); // middleware
catRouter.post("/", use(catController.post)); // middleware
catRouter.put("/:id", use(catController.update)); // middleware
catRouter.delete("/:id", use(catController.delete)); // middleware

export default catRouter;
