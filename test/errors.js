'use strict';

var assert = require('assert');
var lodash = require('lodash');
var errors = require('../lib/errors');


describe('Errors', function () {
    describe('#HttpError', function () {
        it('error object should has all presented properties', function () {
            var err = new errors.HttpError(404, 'Resource not found', 1234);

            assert(err instanceof errors.HttpError);
            assert(err instanceof errors.CustomError);
            assert(err instanceof Error);
            assert.equal('Resource not found', err.message);
            assert.equal(404, err.status_code);
            assert.equal(1234, err.code);
            assert.equal(true, err.hasOwnProperty('time'));
        });
    });
});