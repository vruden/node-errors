'use strict';

var util = require('util');

function Err(message, code) {
    Error.call(this);
    Error.captureStackTrace(this, Err);

    this.status_code = 500;
    this.message = message;
    this.code = code;

    this.time = new Date();
}
util.inherits(Err, Error);

function ValidationError(errors) {
    Error.call(this);
    Error.captureStackTrace(this, ValidationError);

    this.status_code = 422;
    this.message = 'Validation Failed';
    this.errors = errors;

    this.time = new Date();
}
util.inherits(ValidationError, Error);

/**
 *
 * @param status_code HTTP status code, such as 403, 404, 500, etc.
 * @param message
 * @param code
 * @constructor
 */
function HttpError(status_code, message, code) {
    Error.call(this);
    Error.captureStackTrace(this, HttpError);

    this.status_code = status_code;
    this.message = message;
    this.code = code;

    this.time = new Date();
}
util.inherits(HttpError, Error);


exports.Err = Err;
exports.ValidationError = ValidationError;
exports.HttpError = HttpError;