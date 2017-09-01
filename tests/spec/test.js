'use strict';

var getOwnPropertyDescriptor;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  getOwnPropertyDescriptor = require('../../index.js');
} else {
  getOwnPropertyDescriptor = returnExports;
}

describe('getOwnPropertyDescriptor', function () {
  it('should return undefined because the object does not own the property', function () {
    var descr = getOwnPropertyDescriptor({}, 'name');

    expect(descr).toBe(void 0);
  });

  it('should return a data descriptor', function () {
    var descr = getOwnPropertyDescriptor({ name: 'Testing' }, 'name');
    var expected = {
      configurable: true,
      enumerable: true,
      value: 'Testing',
      writable: true
    };

    expect(descr).toEqual(expected);
  });

  it('should return undefined because the object does not own the property', function () {
    var descr = getOwnPropertyDescriptor(Object.create({ name: 'Testing' }, {}), 'name');

    expect(descr).toBe(void 0);
  });

  it('should return a data descriptor', function () {
    var expected = {
      configurable: true,
      enumerable: true,
      value: 'Testing',
      writable: true
    };
    var obj = Object.create({}, { name: expected });

    var descr = getOwnPropertyDescriptor(obj, 'name');

    expect(descr).toEqual(expected);
  });

  it('should throw error for `null` or `undefined`', function () {
    expect(function () {
      getOwnPropertyDescriptor(void 0, 'any');
    }).toThrow();

    expect(function () {
      getOwnPropertyDescriptor(null, 'any');
    }).toThrow();
  });

  it('should work with non object', function () {
    var expected = {
      configurable: false,
      enumerable: true,
      value: 'f',
      writable: false
    };

    var str = 'foo';
    expect(getOwnPropertyDescriptor(str, 0)).toEqual(expected);
    expect(getOwnPropertyDescriptor(str, 3)).toBe(void 0);

    var strObj = Object(str);
    strObj[4] = 1;

    var expectedx = {
      configurable: true,
      enumerable: true,
      value: 1,
      writable: true
    };

    expect(getOwnPropertyDescriptor(strObj, 0)).toEqual(expected);
    expect(getOwnPropertyDescriptor(strObj, 3)).toBe(void 0);
    expect(getOwnPropertyDescriptor(strObj, 4)).toEqual(expectedx);
  });
});
