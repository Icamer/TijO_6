'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('findMax', function ()
{
    it('should find max number from array', function ()
    {
        expect(app.findMax([5, 3, 4, 0, 123, 12])).to.eql(123);
    });

    it('should return false when array contains elements other than numbers', function ()
    {
        expect(app.findMax([5, 3, false, '23', 123, 12])).to.eql(false);
    });
});
