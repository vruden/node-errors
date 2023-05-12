"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http = require("http");
const errors_1 = require("./errors");
const errorHandler = function (debugMode = false) {
    return function (err, req, res, next) {
        const statusCode = err.statusCode || 500;
        const data = {
            message: 'Internal Server Error'
        };
        if (err instanceof errors_1.HttpError) {
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
        }
        else {
            console.log(time, '- [error]', data.message);
        }
        res.status(statusCode).json(data);
    };
};
exports.errorHandler = errorHandler;
