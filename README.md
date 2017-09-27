# Error List

## Usage

    const ErrorList = require('error-list');
    
    class MyError extends ErrorList.BaseError {
      // constructor is optional; you should omit it if you just want a custom error
      // type for inheritance and type checking
      constructor(message) {
        super(message);
      }
    }
    
    
## List of errors:
* [BaseError](#BaseError)
* [HttpError](#HttpError)
* [ServerError](#ServerError)
* [BadRequestHttpError](#BadRequestHttpError)
* [UnauthorizedHttpError](#UnauthorizedHttpError)
* [ForbiddenHttpError](#ForbiddenHttpError)
* [NotFoundHttpError](#NotFoundHttpError)
* [MethodNotAllowedHttpError](#MethodNotAllowedHttpError)
* [GoneHttpError](#GoneHttpError)
* [UnsupportedMediaTypeHttpError](#UnsupportedMediaTypeHttpError)
* [UnprocessableEntityHttpError](#UnprocessableEntityHttpError)
* [ValidationError](#ValidationError)
* [TooManyRequestsHttpError](#TooManyRequestsHttpError)
   


### BaseError

    new BaseError('Simple error', [code]);
    
### HttpError

    const err = new ErrorList.HttpError(404, 'Resource not found', 1234);
    
    err instanceof ErrorList.HttpError // true
    err instanceof ErrorList.BaseError // true
    err instanceof Error // true
    
    err.name // HttpError
    err.message // Resource not found
    err.statusMessage // Not Found
    err.statusCode // 404
    err.code // 1234
    err.time // Wed Sep 27 2017 16:26:10 GMT+0300 (MSK)

### ServerError

ServerErrorHttpException represents an "Internal Server Error" HTTP exception with status code 500.

    new ServerError('Lost connection');

### BadRequestHttpError

BadRequestHttpError represents a "Bad Request" HTTP exception with status code 400.

Use this exception to represent a generic client error. In many cases, there may be an HTTP exception that more precisely describes the error. In that case, consider using the more precise exception to provide the user with additional information.

### UnauthorizedHttpError

UnauthorizedHttpError represents an "Unauthorized" HTTP exception with status code 401

Use this exception to indicate that a client needs to authenticate via WWW-Authenticate header to perform the requested action.

If the client is already authenticated and is simply not allowed to perform the action, consider using a 403 or 404 instead.

### ForbiddenHttpError

ForbiddenHttpError represents a "Forbidden" HTTP exception with status code 403.

Use this exception when a user is not allowed to perform the requested action. Using different credentials might or might not allow performing the requested action. If you do not want to expose authorization information to the user, it is valid to respond with a 404 

### NotFoundHttpError

NotFoundHttpError represents a "Not Found" HTTP exception with status code 404.

    new ErrorList.NotFoundHttpError(404, 'Resource not found');

### MethodNotAllowedHttpError

MethodNotAllowedHttpError represents a "Method Not Allowed" HTTP exception with status code 405.

### GoneHttpError

GoneHttpError represents a "Gone" HTTP exception with status code 410

Throw a GoneHttpException when a user requests a resource that no longer exists at the requested url. For example, after a record is deleted, future requests for that record should return a 410 GoneHttpException instead of a 404

### UnsupportedMediaTypeHttpError

UnsupportedMediaTypeHttpError represents an "Unsupported Media Type" HTTP exception with status code 415

Use this exception when the client sends data in a format that your application does not understand. For example, you would throw this exception if the client POSTs XML data to an action or controller that only accepts JSON.

### UnprocessableEntityHttpError
UnprocessableEntityHttpError represents an "Unprocessable Entity" HTTP exception with status code 422.

Use this exception to inform that the server understands the content type of the request entity and the syntax of that request entity is correct but the server was unable to process the contained instructions. For example, to return form validation errors.

### ValidationError

    let badFields = [];
    
    const err = new ValidationError(badFields);
    
    for (let badFiled of err.errors) {
        
    }
    
        
ValidationError represents an "Unprocessable Entity" HTTP exception with status code 422.


### TooManyRequestsHttpError

TooManyRequestsHttpError represents a "Too Many Requests" HTTP exception with status code 429

Use this exception to indicate that a client has made too many requests in a given period of time. For example, you would throw this exception when 'throttling' an API user.
