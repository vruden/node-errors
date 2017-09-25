export interface ICustomError extends Error {
    code: number;
    time: Date;
}

export class CustomError extends Error implements ICustomError {
    readonly time: Date;

    constructor(message?: string, public code: number = 0) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        this.name = 'CustomError';
        this.time = new Date();
    }
}

export interface IHttpError extends ICustomError {
    statusCode: number;
}

/**
 *
 * @param statusCode HTTP status code, such as 403, 404, 500, etc.
 * @param message
 * @param code
 */
export class HttpError extends CustomError implements IHttpError {
    constructor(public statusCode: number = 500, message?: string, code?: number) {
        super(message, code);

        this.name = 'HttpError';
    }
}

export class ServerError extends HttpError {
    constructor(message?: string, code?: number) {
        super(500, message, code);

        this.name = 'ServerError';
    }
}

export interface IValidationError extends IHttpError {
    errors: any[];
}

export class ValidationError extends HttpError implements IValidationError {
    constructor(public errors: any[], message = 'Validation Failed', statusCode: number = 422, code?: number) {
        super(statusCode, message, code);

        this.name = 'ValidationError';
    }
}