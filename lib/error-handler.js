'use strict';

var http = require('http');
var _ = require('lodash');

module.exports = function (debugMode) {
    return function (err, req, res, next) {
        var error = {};
        var status_code = err.status_code || 500;

        if (!_.isUndefined(err.code)) {
            error.code = err.code;
        }

        if (err instanceof ValidationError) {
            error.message = err.message;
            error.errors = err.errors;
        } else if (err instanceof HttpError && !_.isUndefined(err.message)) {
            error.message = err.message;
        }

        var time = (err.time || new Date()).toUTCString().slice(5, -4);
        if (debugMode && status_code >= 500) {
            console.error(time, err.stack);
        } else {
            console.log(time, '- [error]', err.message || http.STATUS_CODES[status_code]);
        }

        res.status(status_code).json({
            result: false,
            error: error
        });
    }
};




