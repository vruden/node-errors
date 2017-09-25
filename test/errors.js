'use strict';

let assert = require('assert');
let errors = require('../lib/errors');


describe('Errors', function () {
    describe('#HttpError', function () {
        it('error object should has all presented properties', function () {
            let err = new errors.HttpError(404, 'Resource not found', 1234);

            assert(err instanceof errors.HttpError);
            assert(err instanceof errors.CustomError);
            assert(err instanceof Error);
            assert.equal('HttpError', err.name);
            assert.equal('Resource not found', err.message);
            assert.equal(404, err.statusCode);
            assert.equal(1234, err.code);
            assert.equal(true, err.hasOwnProperty('time'));
        });
    });
});