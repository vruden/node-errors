"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class BaseError extends Error {
    constructor(message, code = 0) {
        super(message);
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.time = new Date();
    }
}
exports.BaseError = BaseError;
/**
 *
 * @param statusCode HTTP status code, such as 403, 404, 500, etc.
 * @param message
 * @param code
 */
class HttpError extends BaseError {
    constructor(statusCode = 500, message, code) {
        super(message, code);
        this.statusCode = statusCode;
        this.statusMessage = http.STATUS_CODES[statusCode];
    }
}
exports.HttpError = HttpError;
class BadRequestHttpError extends HttpError {
    constructor(message, code) {
        super(400, message, code);
    }
}
exports.BadRequestHttpError = BadRequestHttpError;
class UnauthorizedHttpError extends HttpError {
    constructor(message, code) {
        super(401, message, code);
    }
}
exports.UnauthorizedHttpError = UnauthorizedHttpError;
class ForbiddenHttpError extends HttpError {
    constructor(message, code) {
        super(403, message, code);
    }
}
exports.ForbiddenHttpError = ForbiddenHttpError;
class NotFoundHttpError extends HttpError {
    constructor(message, code) {
        super(404, message, code);
    }
}
exports.NotFoundHttpError = NotFoundHttpError;
class MethodNotAllowedHttpError extends HttpError {
    constructor(message, code) {
        super(405, message, code);
    }
}
exports.MethodNotAllowedHttpError = MethodNotAllowedHttpError;
class GoneHttpError extends HttpError {
    constructor(message, code) {
        super(410, message, code);
    }
}
exports.GoneHttpError = GoneHttpError;
class UnsupportedMediaTypeHttpError extends HttpError {
    constructor(message, code) {
        super(415, message, code);
    }
}
exports.UnsupportedMediaTypeHttpError = UnsupportedMediaTypeHttpError;
class UnprocessableEntityHttpError extends HttpError {
    constructor(message, code) {
        super(422, message, code);
    }
}
exports.UnprocessableEntityHttpError = UnprocessableEntityHttpError;
class ValidationError extends HttpError {
    constructor(errors, message = 'Validation Failed', statusCode = 422, code) {
        super(statusCode, message, code);
        this.errors = errors;
    }
}
exports.ValidationError = ValidationError;
class TooManyRequestsHttpError extends HttpError {
    constructor(message, code) {
        super(429, message, code);
    }
}
exports.TooManyRequestsHttpError = TooManyRequestsHttpError;
class ServerError extends HttpError {
    constructor(message, code) {
        super(500, message, code);
    }
}
exports.ServerError = ServerError;
class NotImplementedError extends HttpError {
    constructor(message, code) {
        super(501, message, code);
    }
}
exports.NotImplementedError = NotImplementedError;
//# sourceMappingURL=errors.js.map