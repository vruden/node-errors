import * as http from 'http';

export interface IBaseError extends Error {
    code: number;
    time: Date;
}

export class BaseError extends Error implements IBaseError {
    readonly time: Date;

    constructor(message?: string, public code: number = 0) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;
        this.time = new Date();
    }
}

export interface IHttpError extends IBaseError {
    statusCode: number;
}

/**
 *
 * @param statusCode HTTP status code, such as 403, 404, 500, etc.
 * @param message
 * @param code
 */
export class HttpError extends BaseError implements IHttpError {
    public statusMessage: string;

    constructor(public statusCode: number = 500, message?: string, code?: number) {
        super(message, code);

        this.statusMessage = http.STATUS_CODES[statusCode];
    }
}

export class BadRequestHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(400, message, code);
    }
}

export class UnauthorizedHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(401, message, code);
    }
}

export class ForbiddenHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(403, message, code);
    }
}

export class NotFoundHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(404, message, code);
    }
}

export class MethodNotAllowedHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(405, message, code);
    }
}

export class GoneHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(410, message, code);
    }
}

export class UnsupportedMediaTypeHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(415, message, code);
    }
}

export class UnprocessableEntityHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(422, message, code);
    }
}

export interface IValidationError extends IHttpError {
    errors: any;
}

export class ValidationHttpError extends HttpError implements IValidationError {
    constructor(public errors: any, message = 'Validation Failed', statusCode: number = 422, code?: number) {
        super(statusCode, message, code);
    }
}

export class TooManyRequestsHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(429, message, code);
    }
}

export class ServerHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(500, message, code);
    }
}

export class NotImplementedHttpError extends HttpError {
    constructor(message?: string, code?: number) {
        super(501, message, code);
    }
}