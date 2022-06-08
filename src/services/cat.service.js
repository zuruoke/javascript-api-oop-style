/**
  @abstract This module implements an individual Cat Service;
  @abstract It injects the Cat model by inheriting from the Base Service;
  @abstract Uses the super method to make reference to the parent class and inject the Cat Model;
 */

import BaseService from "./base.service.js";

export default class CatService extends BaseService {
  constructor(catModel) {
    super(catModel);
  }
}
