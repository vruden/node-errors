// export * from './errors';
export {
    BaseError,
    HttpError,
    ServerHttpError,
    BadRequestHttpError,
    UnauthorizedHttpError,
    ForbiddenHttpError,
    NotFoundHttpError,
    MethodNotAllowedHttpError,
    GoneHttpError,
    UnsupportedMediaTypeHttpError,
    UnprocessableEntityHttpError,
    ValidationHttpError,
    TooManyRequestsHttpError,
    NotImplementedHttpError
} from './errors';
export { errorHandler } from './error-handler';