import toObject from 'to-object-x';
import toPropertyKey from 'to-property-key-x';
import isFalsey from 'is-falsey-x';
import attempt from 'attempt-x';
import hasSymbolSupport from 'has-symbol-support-x';
import owns from 'has-own-property-x';
import isPrimitive from 'is-primitive';
import isString from 'is-string';
import isIndex from 'is-index-x';
import propertyIsEnumerable from 'property-is-enumerable-x';

/** @type {ObjectConstructor} */
const castObject = {}.constructor;
const nativeGOPD = typeof castObject.getOwnPropertyDescriptor === 'function' && castObject.getOwnPropertyDescriptor;
let getOPDFallback1;
let getOPDFallback2;

// ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

const doesGOPDWork = function doesGOPDWork(object, prop) {
  object[toPropertyKey(prop)] = 0;
  const testResult = attempt(nativeGOPD, object, prop);

  return testResult.threw === false && testResult.value.value === 0;
};

// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */
let $getOwnPropertyDescriptor;

if (nativeGOPD) {
  const doc = typeof document !== 'undefined' && document;
  const getOPDWorksOnDom = doc ? doesGOPDWork(doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    const res = attempt(nativeGOPD, castObject('abc'), 1);
    const worksWithStr = res.threw === false && res.value && res.value.value === 'b';

    if (worksWithStr) {
      const getOPDWorksOnObject = doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        const worksWithPrim = attempt(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */
        const worksWithObjSym = hasSymbolSupport && doesGOPDWork({}, castObject(Symbol('')));

        if (worksWithObjSym) {
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
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (isFalsey($getOwnPropertyDescriptor) || getOPDFallback1 || getOPDFallback2) {
  const prototypeOfObject = castObject.prototype;

  // If JS engine supports accessors creating shortcuts.
  let lookupGetter;
  let lookupSetter;
  const supportsAccessors = owns(prototypeOfObject, '__defineGetter__');

  if (supportsAccessors) {
    /* eslint-disable-next-line no-underscore-dangle */
    const lg = prototypeOfObject.__lookupGetter__;
    /* eslint-disable-next-line no-underscore-dangle */
    const ls = prototypeOfObject.__lookupSetter__;
    lookupGetter = function $lookupGetter(object, property) {
      return lg.call(object, property);
    };

    lookupSetter = function $lookupSetter(object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    const obj = toObject(object);
    const propKey = toPropertyKey(property);

    let result;

    // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.
    if (getOPDFallback1) {
      result = attempt.call(castObject, getOPDFallback1, obj, propKey);

      if (result.threw === false) {
        return result.value;
      }
      // try the shim if the real one doesn't work
    }

    const isStringIndex = isString(obj) && isIndex(propKey, obj.length);

    if (getOPDFallback2 && isStringIndex === false) {
      result = attempt.call(castObject, getOPDFallback2, obj, propKey);

      if (result.threw === false) {
        return result.value;
      }
      // try the shim if the real one doesn't work
    }

    /* eslint-disable-next-line no-void */
    let descriptor = void 0;

    // If object does not owns property return undefined immediately.
    if (isStringIndex === false && owns(obj, propKey) === false) {
      return descriptor;
    }

    // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.
    descriptor = {
      configurable: isPrimitive(object) === false && isStringIndex === false,
      enumerable: propertyIsEnumerable(obj, propKey),
    };

    // If JS engine supports accessor properties then property may be a
    // getter or setter.
    if (supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.
      /* eslint-disable-next-line no-proto */
      const prototype = obj.__proto__;
      const notPrototypeOfObject = obj !== prototypeOfObject;

      // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor
      if (notPrototypeOfObject) {
        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototypeOfObject;
      }

      const getter = lookupGetter(obj, propKey);
      const setter = lookupSetter(obj, propKey);

      if (notPrototypeOfObject) {
        // Once we have getter and setter we can put values back.
        /* eslint-disable-next-line no-proto */
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

const gOPS = $getOwnPropertyDescriptor;

export default gOPS;
