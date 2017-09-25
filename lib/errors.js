"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, code = 0) {
        super(message);
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
        this.name = 'CustomError';
        this.time = new Date();
    }
}
exports.CustomError = CustomError;
/**
 *
 * @param statusCode HTTP status code, such as 403, 404, 500, etc.
 * @param message
 * @param code
 */
class HttpError extends CustomError {
    constructor(statusCode = 500, message, code) {
        super(message, code);
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
class ServerError extends HttpError {
    constructor(message, code) {
        super(500, message, code);
        this.name = 'ServerError';
    }
}
exports.ServerError = ServerError;
class ValidationError extends HttpError {
    constructor(errors, message = 'Validation Failed', statusCode = 422, code) {
        super(statusCode, message, code);
        this.errors = errors;
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=errors.js.map