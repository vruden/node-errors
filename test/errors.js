'use strict';

const assert = require('assert');
const ErrorList = require('../lib/errors');


describe('Errors', function () {
    describe('#HttpError', function () {
        it('error object should has all presented properties', function () {
            let err = new ErrorList.HttpError(404, 'Resource not found', 1234);

            console.log(err.time)

            assert(err instanceof ErrorList.HttpError);
            assert(err instanceof ErrorList.BaseError);
            assert(err instanceof Error);
            assert.equal('HttpError', err.name);
            assert.equal('Not Found', err.statusMessage);
            assert.equal('Resource not found', err.message);
            assert.equal(404, err.statusCode);
            assert.equal(1234, err.code);
            assert.equal(true, err.hasOwnProperty('time'));
        });
    });
});