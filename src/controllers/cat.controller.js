/**
  @abstract This module implements an individual Cat Controller;
  @abstract It injects the Cat Service by inheriting from the Base Controller;
  @abstract Uses the super method to make reference to the parent class and inject the Cat Service;
 */

import BaseController from "./base.controller.js";

export default class CatController extends BaseController {
  constructor(catService) {
    super(catService);
  }
}
