/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/object-get-own-property-descriptor-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/object-get-own-property-descriptor-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/object-get-own-property-descriptor-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/object-get-own-property-descriptor-x" title="npm version">
 * <img src="https://badge.fury.io/js/object-get-own-property-descriptor-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Sham for Reflect.getOwnPropertyDescriptor.
 *
 * Requires ES3 or above.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module object-get-own-property-descriptor-x
 */

/* eslint strict: 1, max-statements: 1, id-length: 1, complexity: 1 */

/* global module, document */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // ES5 15.2.3.3
  // http://es5.github.com/#x15.2.3.3

  var doesGetOwnPropertyDescriptorWork = function (object) {
    try {
      object.sentinel = 0;
      return $getOwnPropertyDescriptor(object, 'sentinel').value === 0;
    } catch (ignore) {
      return false;
    }
  };

  // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
  if ($getOwnPropertyDescriptor) {
    var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
    var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' || doesGetOwnPropertyDescriptorWork(document.createElement('div'));
    if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
      var getOwnPropertyDescriptorFallback = $getOwnPropertyDescriptor;
    }
  }

  var toObject;
  if ($getOwnPropertyDescriptor && !getOwnPropertyDescriptorFallback) {
    try {
      $getOwnPropertyDescriptor(42, 'name');
    } catch (err) {
      toObject = require('to-object-x');
      $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
        return $getOwnPropertyDescriptor(toObject(object), property);
      };
    }
  } else if (!$getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
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
      /* eslint-disable no-underscore-dangle, no-restricted-properties */
      var lg = prototypeOfObject.__lookupGetter__;
      var ls = prototypeOfObject.__lookupSetter__;
      /* eslint-enable no-underscore-dangle, no-restricted-properties */
      lookupGetter = function (object, property) {
        return lg.call(object, property);
      };

      lookupSetter = function (object, property) {
        return ls.call(object, property);
      };
    }

    /* eslint-disable no-proto */
    $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
      var obj = toObject(object);

      // make a valiant attempt to use the real getOwnPropertyDescriptor
      // for I8's DOM elements.
      if (getOwnPropertyDescriptorFallback) {
        try {
          return getOwnPropertyDescriptorFallback.call(Object, obj, property);
        } catch (ignore) {
          // try the shim if the real one doesn't work
        }
      }

      var descriptor;

      // If object does not owns property return undefined immediately.
      if (!owns(obj, property)) {
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
        var prototype = obj.__proto__;
        var notPrototypeOfObject = obj !== prototypeOfObject;
        // avoid recursion problem, breaking in Opera Mini when
        // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
        // or any other Object.prototype accessor
        if (notPrototypeOfObject) {
          object.__proto__ = prototypeOfObject;
        }

        var getter = lookupGetter(obj, property);
        var setter = lookupSetter(obj, property);

        if (notPrototypeOfObject) {
          // Once we have getter and setter we can put values back.
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
    /* eslint-enable no-proto */
  }

  /**
   * This method returns a property descriptor for an own property (that is,
   * one directly present on an object and not in the object's prototype chain)
   * of a given object.
   *
   * @param {*} object The object in which to look for the property.
   * @param {*} property The name of the property whose description is to be retrieved.
   * @return {Object} A property descriptor of the given property if it exists on the object, undefined otherwise.
   * @example
   * var reflectGetOwnPropertyDescriptor = require('object-get-own-property-descriptor-x');
   * var obj = { bar: 42 };
   * var d = Object.getOwnPropertyDescriptor(o, 'bar');
   * // d is {
   * //   configurable: true,
   * //   enumerable: true,
   * //   value: 42,
   * //   writable: true
   * // }
   */
  module.exports = $getOwnPropertyDescriptor;
}());
