/**
  @abstract This module implements an individual Api Error handling;
  @abstract It implements it's own preferred error handling;
  @abstract By using the super method to make reference to the parent class and pass its own properties;
 */

import BaseError from "./base.error.js";

export default class ApiError extends BaseError {
  constructor(name, statusCode, description, isOperational = true) {
    super(name, statusCode, isOperational, description);
  }
}
