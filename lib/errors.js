'use strict';

var util = require('util');

function CustomError(message, status_code) {
    Error.call(this, message);
    
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new Error()).stack;
    }
    
    this.message = message;
    this.status_code = status_code;
    this.time = new Date();
}

util.inherits(CustomError, Error);

function Err(message, code) {
    CustomError.call(this, message, 500);
    
    this.code = code;
}
util.inherits(Err, CustomError);

function ValidationError(errors) {
    CustomError.call(this, 'Validation Failed', 422);
    
    this.errors = errors;
}
util.inherits(ValidationError, CustomError);

/**
 *
 * @param status_code HTTP status code, such as 403, 404, 500, etc.
 * @param message
 * @param code
 * @constructor
 */
function HttpError(status_code, message, code) {
    CustomError.call(this, message, status_code);
    
    this.code = code;
}
util.inherits(HttpError, CustomError);


exports.CustomError = CustomError;
exports.Err = Err;
exports.ValidationError = ValidationError;
exports.HttpError = HttpError;