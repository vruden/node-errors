import * as http from 'http';
import { HttpError } from './errors';

export const errorHandler = function (debugMode: boolean = false) {
    return function (err, req, res, next) {
        const statusCode = err.statusCode || 500;

        const data: {message?: string, code?: number, errors?: any} = {
            message: 'Internal Server Error'
        };

        if (err instanceof HttpError) {
            data.message = err.message === '' ? http.STATUS_CODES[statusCode] : err.message;
        }

        if (err.code !== undefined) {
            data.code = err.code;
        }

        if (err.errors !== undefined) {
            data.errors = err.errors;
        }

        const time = (err.time || new Date()).toUTCString().slice(5, -4);

        if (debugMode && statusCode >= 500) {
            console.error(time, err.stack);
        } else {
            console.log(time, '- [error]', data.message);
        }

        res.status(statusCode).json(data);
    };
};