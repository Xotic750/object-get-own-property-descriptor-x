let getOwnPropertyDescriptor;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  getOwnPropertyDescriptor = require('../../index.js');
} else {
  getOwnPropertyDescriptor = returnExports;
}

describe('getOwnPropertyDescriptor', function() {
  it('should return undefined because the object does not own the property', function() {
    const descr = getOwnPropertyDescriptor({}, 'name');

    expect(descr).toBe(void 0);
  });

  it('should return a data descriptor', function() {
    const descr = getOwnPropertyDescriptor({name: 'Testing'}, 'name');
    const expected = {
      configurable: true,
      enumerable: true,
      value: 'Testing',
      writable: true,
    };

    expect(descr).toStrictEqual(expected);
  });

  it('should return undefined because the object does not own the property', function() {
    const descr = getOwnPropertyDescriptor(Object.create({name: 'Testing'}, {}), 'name');

    expect(descr).toBe(void 0);
  });

  it('should return a data descriptor', function() {
    const expected = {
      configurable: true,
      enumerable: true,
      value: 'Testing',
      writable: true,
    };
    const obj = Object.create({}, {name: expected});

    const descr = getOwnPropertyDescriptor(obj, 'name');

    expect(descr).toStrictEqual(expected);
  });

  it('should throw error for `null` or `undefined`', function() {
    expect(function() {
      getOwnPropertyDescriptor(void 0, 'any');
    }).toThrow();

    expect(function() {
      getOwnPropertyDescriptor(null, 'any');
    }).toThrow();
  });

  it('should work with non object', function() {
    const expected = {
      configurable: false,
      enumerable: true,
      value: 'f',
      writable: false,
    };

    const str = 'foo';
    expect(getOwnPropertyDescriptor(str, 0)).toStrictEqual(expected);
    expect(getOwnPropertyDescriptor(str, 3)).toBe(void 0);

    const strObj = Object(str);
    strObj[4] = 1;

    const expectedx = {
      configurable: true,
      enumerable: true,
      value: 1,
      writable: true,
    };

    expect(getOwnPropertyDescriptor(strObj, 0)).toStrictEqual(expected);
    expect(getOwnPropertyDescriptor(strObj, 3)).toBe(void 0);
    expect(getOwnPropertyDescriptor(strObj, 4)).toStrictEqual(expectedx);
  });
});
