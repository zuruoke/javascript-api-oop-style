/**
  @abstract This module implements a Custom Error class that inherits from the global Error interface;
  @abstract To create a custom error capture and handling suitable for this application;
  @abstract It abstracts the the core error implenation and exposes a clearly defined interface; 
  @abstract So subclasses can have access to it to implement their preferred error handling;
  @abstract It is open for extension but closed for modification;
 */

export default class BaseError extends Error {
  constructor(name, statusCode, isOperational, description) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}
