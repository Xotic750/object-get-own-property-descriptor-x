/**
 * @file Sham for ES6 Object.getOwnPropertyDescriptor
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module object-get-own-property-descriptor-x
 */

'use strict';

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getOPDFallback;

// ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var doesGOPDWork = function (object) {
  try {
    object.sentinel = 0;
    return $getOwnPropertyDescriptor(object, 'sentinel').value === 0;
  } catch (ignore) {
    return false;
  }
};

// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
if ($getOwnPropertyDescriptor) {
  var getOPDWorksOnObject = doesGOPDWork({});
  var getOPDWorksOnDom = typeof document === 'undefined' || doesGOPDWork(document.createElement('div'));
  if (getOPDWorksOnDom === false || getOPDWorksOnObject === false) {
    getOPDFallback = $getOwnPropertyDescriptor;
  }
}

var toObject;
if ($getOwnPropertyDescriptor && Boolean(getOPDFallback) === false) {
  try {
    $getOwnPropertyDescriptor(42, 'name');
  } catch (err) {
    toObject = require('to-object-x');
    $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
      return $getOwnPropertyDescriptor(toObject(object), property);
    };
  }
} else if (Boolean($getOwnPropertyDescriptor) === false || getOPDFallback) {
  toObject = require('to-object-x');
  var owns = require('has-own-property-x');
  var prototypeOfObject = Object.prototype;

  var propertyIsEnumerable = prototypeOfObject.propertyIsEnumerable;
  var isEnumerable = function (object, property) {
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

    // make a valiant attempt to use the real getOwnPropertyDescriptor
    // for I8's DOM elements.
    if (getOPDFallback) {
      try {
        return getOPDFallback.call(Object, obj, property);
      } catch (ignore) {
        // try the shim if the real one doesn't work
      }
    }

    var descriptor;

    // If object does not owns property return undefined immediately.
    if (owns(obj, property) === false) {
      return descriptor;
    }

    // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.
    descriptor = {
      configurable: true,
      enumerable: isEnumerable(obj, property)
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
        object.__proto__ = prototypeOfObject;
      }

      var getter = lookupGetter(obj, property);
      var setter = lookupSetter(obj, property);

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
    descriptor.value = obj[property];
    descriptor.writable = true;
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
