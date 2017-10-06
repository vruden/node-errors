export interface IBaseError extends Error {
    code: number;
    time: Date;
}
export declare class BaseError extends Error implements IBaseError {
    code: number;
    readonly time: Date;
    constructor(message?: string, code?: number);
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
export declare class HttpError extends BaseError implements IHttpError {
    statusCode: number;
    statusMessage: string;
    constructor(statusCode?: number, message?: string, code?: number);
}
export declare class BadRequestHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class UnauthorizedHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class ForbiddenHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class NotFoundHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class MethodNotAllowedHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class GoneHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class UnsupportedMediaTypeHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class UnprocessableEntityHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export interface IValidationError extends IHttpError {
    errors: any;
}
export declare class ValidationError extends HttpError implements IValidationError {
    errors: any;
    constructor(errors: any, message?: string, statusCode?: number, code?: number);
}
export declare class TooManyRequestsHttpError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class ServerError extends HttpError {
    constructor(message?: string, code?: number);
}
export declare class NotImplementedError extends HttpError {
    constructor(message?: string, code?: number);
}
