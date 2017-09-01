/**
 * @file Sham for ES6 Object.getOwnPropertyDescriptor
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module object-get-own-property-descriptor-x
 */

'use strict';

var toObject = require('to-object-x');
var toPropertyKey = require('to-property-key-x');
var nativeGOPD = typeof Object.getOwnPropertyDescriptor === 'function' && Object.getOwnPropertyDescriptor;
var getOPDFallback;

// ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var isFalsey = function _isFalsy(value) {
  return Boolean(value) === false;
};

var doesGOPDWork = function (object, prop) {
  try {
    object[toPropertyKey(prop)] = 0;
    return nativeGOPD(object, prop).value === 0;
  } catch (ignore) {
    return false;
  }
};

// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
var $getOwnPropertyDescriptor;
if (nativeGOPD) {
  var getOPDWorksOnDom = typeof document === 'undefined' || doesGOPDWork(document.createElement('div'), 'sentinel');
  if (getOPDWorksOnDom) {
    var getOPDWorksOnObject = doesGOPDWork({}, 'sentinel');
    if (getOPDWorksOnObject) {
      var worksWithPrim;
      try {
        nativeGOPD(42, 'name');
        worksWithPrim = true;
      } catch (ignore) {}

      var worksWithObjSym = require('has-symbol-support-x') && doesGOPDWork({}, Object(Symbol('')));
      if (worksWithObjSym) {
        // eslint-disable-next-line max-depth
        if (worksWithPrim) {
          $getOwnPropertyDescriptor = nativeGOPD;
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(toObject(object), property);
          };
        }
      } else if (worksWithPrim) {
        $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
          return nativeGOPD(object, toPropertyKey(property));
        };
      } else {
        $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
          return nativeGOPD(toObject(object), toPropertyKey(property));
        };
      }
    } else {
      getOPDFallback = nativeGOPD;
    }
  }
}

if (isFalsey($getOwnPropertyDescriptor) || getOPDFallback) {
  var owns = require('has-own-property-x');
  var isPrimitive = require('is-primitive');
  var isString = require('is-string');
  var isDigits = function _isDigits(key) {
    return (/^\d+$/).test(key);
  };

  var prototypeOfObject = Object.prototype;
  var propertyIsEnumerable = prototypeOfObject.propertyIsEnumerable;
  var isEnumerable = function _isEnumerable(object, property) {
    return propertyIsEnumerable.call(object, property);
  };

  // If JS engine supports accessors creating shortcuts.
  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
  if (supportsAccessors) {
    // eslint-disable-next-line no-underscore-dangle
    var lg = prototypeOfObject.__lookupGetter__;
    // eslint-disable-next-line no-underscore-dangle
    var ls = prototypeOfObject.__lookupSetter__;
    lookupGetter = function (object, property) {
      return lg.call(object, property);
    };

    lookupSetter = function (object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    var obj = toObject(object);
    var propKey = toPropertyKey(property);

    // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.
    if (getOPDFallback) {
      try {
        return getOPDFallback.call(Object, obj, propKey);
      } catch (ignore) {
        // try the shim if the real one doesn't work
      }
    }

    var isStringIndex = isString(obj) && isDigits(propKey) && propKey < obj.length;

    var descriptor;
    // If object does not owns property return undefined immediately.
    if (isStringIndex === false && owns(obj, propKey) === false) {
      return descriptor;
    }

    // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.
    descriptor = {
      configurable: isPrimitive(object) === false && isStringIndex === false,
      enumerable: isEnumerable(obj, propKey)
    };

    // If JS engine supports accessor properties then property may be a
    // getter or setter.
    if (supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.
      // eslint-disable-next-line no-proto
      var prototype = obj.__proto__;
      var notPrototypeOfObject = obj !== prototypeOfObject;
      // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor
      if (notPrototypeOfObject) {
        // eslint-disable-next-line no-proto
        obj.__proto__ = prototypeOfObject;
      }

      var getter = lookupGetter(obj, propKey);
      var setter = lookupSetter(obj, propKey);

      if (notPrototypeOfObject) {
        // Once we have getter and setter we can put values back.
        // eslint-disable-next-line no-proto
        obj.__proto__ = prototype;
      }

      if (getter || setter) {
        if (getter) {
          descriptor.get = getter;
        }

        if (setter) {
          descriptor.set = setter;
        }

        // If it was accessor property we're done and return here
        // in order to avoid adding `value` to the descriptor.
        return descriptor;
      }
    }

    // If we got this far we know that object has an own property that is
    // not an accessor so we set it as a value and return descriptor.
    if (isStringIndex) {
      descriptor.value = obj.charAt(propKey);
      descriptor.writable = false;
    } else {
      descriptor.value = obj[propKey];
      descriptor.writable = true;
    }

    return descriptor;
  };
}

/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {Object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 * @example
 * var getOwnPropertyDescriptor = require('object-get-own-property-descriptor-x');
 * var obj = { bar: 42 };
 * var d = getOwnPropertyDescriptor(o, 'bar');
 * // d is {
 * //   configurable: true,
 * //   enumerable: true,
 * //   value: 42,
 * //   writable: true
 * // }
 */
module.exports = $getOwnPropertyDescriptor;
