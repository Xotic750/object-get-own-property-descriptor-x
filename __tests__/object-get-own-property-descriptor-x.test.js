import getOwnPropertyDescriptor from '../src/object-get-own-property-descriptor-x';

describe('getOwnPropertyDescriptor', function() {
  it('should return undefined because the object does not own the property', function() {
    expect.assertions(1);
    const descr = getOwnPropertyDescriptor({}, 'name');

    /* eslint-disable-next-line no-void */
    expect(descr).toBe(void 0);
  });

  it('should return a data descriptor', function() {
    expect.assertions(1);
    const descr = getOwnPropertyDescriptor({name: 'Testing'}, 'name');
    const expected = {
      configurable: true,
      enumerable: true,
      value: 'Testing',
      writable: true,
    };

    expect(descr).toStrictEqual(expected);
  });

  it('should return undefined because the object does not own the property, Object.create', function() {
    expect.assertions(1);
    const descr = getOwnPropertyDescriptor(Object.create({name: 'Testing'}, {}), 'name');

    /* eslint-disable-next-line no-void */
    expect(descr).toBe(void 0);
  });

  it('should return a data descriptor, Object.create', function() {
    expect.assertions(1);
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
    expect.assertions(2);
    expect(function() {
      /* eslint-disable-next-line no-void */
      getOwnPropertyDescriptor(void 0, 'any');
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      getOwnPropertyDescriptor(null, 'any');
    }).toThrowErrorMatchingSnapshot();
  });

  it('should work with non object', function() {
    expect.assertions(5);
    const expected = {
      configurable: false,
      enumerable: true,
      value: 'f',
      writable: false,
    };

    const str = 'foo';
    expect(getOwnPropertyDescriptor(str, 0)).toStrictEqual(expected);
    /* eslint-disable-next-line no-void */
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
    /* eslint-disable-next-line no-void */
    expect(getOwnPropertyDescriptor(strObj, 3)).toBe(void 0);
    expect(getOwnPropertyDescriptor(strObj, 4)).toStrictEqual(expectedx);
  });
});
