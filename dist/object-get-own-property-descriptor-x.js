/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-07-15T19:24:50.404Z",
  "describe": "",
  "description": "Sham for ES6 Object.getOwnPropertyDescriptor",
  "file": "object-get-own-property-descriptor-x.js",
  "hash": "f01abc8c4e713ecc9423",
  "license": "MIT",
  "version": "4.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["objectGetOwnPropertyDescriptorX"] = factory();
	else
		root["objectGetOwnPropertyDescriptorX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(19)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Constructors cached from literals.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */



/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Function: function () {}.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file List of ECMAScript white space characters.
 * @version 3.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module white-space-x
 */



/**
 * A record of a white space character.
 *
 * @typedef {Object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @private
 * @type Array.<CharRecord>
 */
var list = [
  {
    code: 0x0009,
    description: 'Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0009'
  },
  {
    code: 0x000a,
    description: 'Line Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000a'
  },
  {
    code: 0x000b,
    description: 'Vertical Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000b'
  },
  {
    code: 0x000c,
    description: 'Form Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000c'
  },
  {
    code: 0x000d,
    description: 'Carriage Return',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000d'
  },
  {
    code: 0x0020,
    description: 'Space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0020'
  },
  /*
  {
    code: 0x0085,
    description: 'Next line',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u0085'
  }
  */
  {
    code: 0x00a0,
    description: 'No-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u00a0'
  },
  {
    code: 0x1680,
    description: 'Ogham space mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u1680'
  },
  {
    code: 0x180e,
    description: 'Mongolian vowel separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: false,
    es2018: false,
    string: '\u180e'
  },
  {
    code: 0x2000,
    description: 'En quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2000'
  },
  {
    code: 0x2001,
    description: 'Em quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2001'
  },
  {
    code: 0x2002,
    description: 'En space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2002'
  },
  {
    code: 0x2003,
    description: 'Em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2003'
  },
  {
    code: 0x2004,
    description: 'Three-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2004'
  },
  {
    code: 0x2005,
    description: 'Four-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2005'
  },
  {
    code: 0x2006,
    description: 'Six-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2006'
  },
  {
    code: 0x2007,
    description: 'Figure space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2007'
  },
  {
    code: 0x2008,
    description: 'Punctuation space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2008'
  },
  {
    code: 0x2009,
    description: 'Thin space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2009'
  },
  {
    code: 0x200a,
    description: 'Hair space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u200a'
  },
  /*
  {
    code: 0x200b,
    description: 'Zero width space',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u200b'
  },
  */
  {
    code: 0x2028,
    description: 'Line separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2028'
  },
  {
    code: 0x2029,
    description: 'Paragraph separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2029'
  },
  {
    code: 0x202f,
    description: 'Narrow no-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u202f'
  },
  {
    code: 0x205f,
    description: 'Medium mathematical space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u205f'
  },
  {
    code: 0x3000,
    description: 'Ideographic space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u3000'
  },
  {
    code: 0xfeff,
    description: 'Byte Order Mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\ufeff'
  }
];

var stringES2016 = '';
var stringES2018 = '';
var length = list.length;
for (var i = 0; i < length; i += 1) {
  if (list[i].es2016) {
    stringES2016 += list[i].string;
  }

  if (list[i].es2018) {
    stringES2018 += list[i].string;
  }
}

module.exports = {
  /**
   * An array of the whitespace char codes, string, descriptions and language
   * presence in the specifications.
   *
   * @type Array.<CharRecord>
   * @example
   * var whiteSpace = require('white-space-x');
   * whiteSpaces.list.foreach(function (item) {
   *   console.log(lib.description, item.code, item.string);
   * });
   */
  list: list,
  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   */
  string: stringES2018,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   */
  string5: stringES2016,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   */
  string2015: stringES2016,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   * @example
   * var whiteSpace = require('white-space-x');
   * var characters = [
   *   '\u0009',
   *   '\u000a',
   *   '\u000b',
   *   '\u000c',
   *   '\u000d',
   *   '\u0020',
   *   '\u00a0',
   *   '\u1680',
   *   '\u180e',
   *   '\u2000',
   *   '\u2001',
   *   '\u2002',
   *   '\u2003',
   *   '\u2004',
   *   '\u2005',
   *   '\u2006',
   *   '\u2007',
   *   '\u2008',
   *   '\u2009',
   *   '\u200a',
   *   '\u2028',
   *   '\u2029',
   *   '\u202f',
   *   '\u205f',
   *   '\u3000',
   *   '\ufeff'
   * ];
   * var ws = characters.join('');
   * var re1 = new RegExp('^[' + whiteSpace.string2016 + ']+$)');
   * re1.test(ws); // true
   */
  string2016: stringES2016,

  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   */
  string2017: stringES2018,

  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   * @example
   * var whiteSpace = require('white-space-x');
   * var characters = [
   *   '\u0009',
   *   '\u000a',
   *   '\u000b',
   *   '\u000c',
   *   '\u000d',
   *   '\u0020',
   *   '\u00a0',
   *   '\u1680',
   *   '\u2000',
   *   '\u2001',
   *   '\u2002',
   *   '\u2003',
   *   '\u2004',
   *   '\u2005',
   *   '\u2006',
   *   '\u2007',
   *   '\u2008',
   *   '\u2009',
   *   '\u200a',
   *   '\u2028',
   *   '\u2029',
   *   '\u202f',
   *   '\u205f',
   *   '\u3000',
   *   '\ufeff'
   * ];
   * var ws = characters.join('');
   * var re1 = new RegExp('^[' + whiteSpace.string2018 + ']+$)');
   * re1.test(ws); // true
   */
  string2018: stringES2018
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts argument to a value of type Number.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-number-x
 */



var cachedCtrs = __webpack_require__(2);
var castNumber = cachedCtrs.Number;
var Rx = cachedCtrs.RegExp;
var toPrimitive = __webpack_require__(25);
var libTrim = __webpack_require__(13);
var trim2016 = libTrim.trim2016;
var trim2018 = libTrim.trim2018;
var libParseInt = __webpack_require__(38);
var $parseInt2016 = libParseInt.parseInt2016;
var $parseInt2018 = libParseInt.parseInt2018;
var pStrSlice = cachedCtrs.String.prototype.slice;
var NAN = __webpack_require__(16);

var binaryRegex = /^0b[01]+$/i;
// Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.
var test = binaryRegex.test;
var isBinary = function _isBinary(value) {
  return test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;
var isOctal = function _isOctal(value) {
  return test.call(octalRegex, value);
};

var nonWSregex2016 = new Rx('[\u0085\u200b\ufffe]', 'g');
var hasNonWS2016 = function _hasNonWS(value) {
  return test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new Rx('[\u0085\u180e\u200b\ufffe]', 'g');
var hasNonWS2018 = function _hasNonWS(value) {
  return test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};

var $toNumber2016 = function toNumber2016(argument) {
  var value = toPrimitive(argument, Number);
  if (typeof value === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016($parseInt2016(pStrSlice.call(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber2016($parseInt2016(pStrSlice.call(value, 2), 8));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    var trimmed = trim2016(value);
    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return castNumber(value);
};

var $toNumber2018 = function toNumber2018(argument) {
  var value = toPrimitive(argument, Number);
  if (typeof value === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018($parseInt2018(pStrSlice.call(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber2018($parseInt2018(pStrSlice.call(value, 2), 8));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    var trimmed = trim2018(value);
    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return castNumber(value);
};

module.exports = {
  /**
   * reference to toNumber2018.
   */
  toNumber: $toNumber2018,

  /**
   * This method converts argument to a value of type Number. (ES2016)

   * @param {*} argument - The argument to convert to a number.
   * @throws {TypeError} - If argument is a Symbol or not coercible.
   * @returns {*} The argument converted to a number.
   * @example
   * var toNumber = require('to-number-x').toNumber2016;
   *
   * toNumber('1'); // 1
   * toNumber(null); // 0
   * toNumber(true); // 1
   * toNumber('0o10'); // 8
   * toNumber('0b10'); // 2
   * toNumber('0xF'); // 16
   *
   * toNumber(' 1 '); // 1
   *
   * toNumber(Symbol('')) // TypeError
   * toNumber(Object.create(null)) // TypeError
   */
  toNumber2016: $toNumber2016,

  /**
   * This method converts argument to a value of type Number. (ES2018)

   * @param {*} argument - The argument to convert to a number.
   * @throws {TypeError} - If argument is a Symbol or not coercible.
   * @returns {*} The argument converted to a number.
   * @example
   * var toNumber = require('to-number-x').toNumber2018;
   *
   * toNumber('1'); // 1
   * toNumber(null); // 0
   * toNumber(true); // 1
   * toNumber('0o10'); // 8
   * toNumber('0b10'); // 2
   * toNumber('0xF'); // 16
   *
   * toNumber(' 1 '); // 1
   *
   * toNumber(Symbol('')) // TypeError
   * toNumber(Object.create(null)) // TypeError
   */
  toNumber2018: $toNumber2018
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/



/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the left end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-left-x
 */



var requireCoercibleToString = __webpack_require__(7);
var Rx = __webpack_require__(2).RegExp;
var reLeft2016 = new Rx('^[' + __webpack_require__(3).string2016 + ']+');
var reLeft2018 = new Rx('^[' + __webpack_require__(3).string2018 + ']+');
var replace = ''.replace;

var $trimLeft2016 = function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, '');
};

var $trimLeft2018 = function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft2018, '');
};

module.exports = {
  /**
   * A reference to leftTrim2018.
   */
  trimLeft: $trimLeft2018,

  /**
   * This method removes whitespace from the left end of a string. (ES2016)
   *
   * @param {string} string - The string to trim the left end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The left trimmed string.
   * @example
   * var trimLeft = require('trim-left-x').trimLeft2016;
   *
   * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
   */
  trimLeft2016: $trimLeft2016,

  /**
   * This method removes whitespace from the left end of a string. (ES2018)
   *
   * @param {string} string - The string to trim the left end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The left trimmed string.
   * @example
   * var trimLeft = require('trim-left-x').trimLeft2018;
   *
   * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
   */
  trimLeft2018: $trimLeft2018
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Requires an argument is corecible then converts using ToString.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module require-coercible-to-string-x
 */



var requireObjectCoercible = __webpack_require__(14);
var toStr = __webpack_require__(8);

/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} value - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 * @example
 * var requireCoercibleToString = require('require-coercible-to-string-x');
 *
 * requireCoercibleToString(); // TypeError
 * requireCoercibleToString(null); // TypeError
 * requireCoercibleToString(Symbol('')); // TypeError
 * requireCoercibleToString(Object.create(null)); // TypeError
 * requireCoercibleToString(1); // '1'
 * requireCoercibleToString(true); // 'true'
 */
module.exports = function requireCoercibleToString(value) {
  return toStr(requireObjectCoercible(value));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToString.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 * @version 1.4.5
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-x
 */



var castString = __webpack_require__(2).String;
var isSymbol = __webpack_require__(0);

/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} value - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 * @example
 * var $toString = require('to-string-x');
 *
 * $toString(); // 'undefined'
 * $toString(null); // 'null'
 * $toString('abc'); // 'abc'
 * $toString(true); // 'true'
 * $toString(Symbol('foo')); // TypeError
 * $toString(Symbol.iterator); // TypeError
 * $toString(Object(Symbol.iterator)); // TypeError
 * $toString(Object.create(null)); // TypeError
 */
module.exports = function ToString(value) {
  if (isSymbol(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return castString(value);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for Number.isNaN - the global isNaN returns false positives.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nan-x
 */



/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} value - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 * @example
 * var numberIsNaN = require('is-nan-x');
 *
 * numberIsNaN(NaN);        // true
 * numberIsNaN(Number.NaN); // true
 * numberIsNaN(0 / 0);      // true
 *
 * // e.g. these would have been true with global isNaN()
 * numberIsNaN('NaN');      // false
 * numberIsNaN(undefined);  // false
 * numberIsNaN({});         // false
 * numberIsNaN('blabla');   // false
 *
 * // These all return false
 * numberIsNaN(true);
 * numberIsNaN(null);
 * numberIsNaN(37);
 * numberIsNaN('37');
 * numberIsNaN('37.37');
 * numberIsNaN('');
 * numberIsNaN(' ');
 */
module.exports = function isNaN(value) {
  return value !== value;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts argument to a value of type Boolean.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-boolean-x
 */



/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} value - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 * @example
 * var toBoolean = require('to-boolean-x');
 *
 * toBoolean(null); // false
 * toBoolean(''); // false
 * toBoolean(1); // true
 * toBoolean('0'); // true
 */
module.exports = function toBoolean(value) {
  return !!value;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the left and right end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-x
 */



var libTrimLeft = __webpack_require__(6);
var trimLeft2016 = libTrimLeft.trimLeft2016;
var trimLeft2018 = libTrimLeft.trimLeft2018;
var libTrimRight = __webpack_require__(36);
var trimRight2016 = libTrimRight.trimRight2016;
var trimRight2018 = libTrimRight.trimRight2016;

var $trim2016 = function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
};

var $trim2018 = function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
};

module.exports = {
  /**
   * A reference to trim2018.
   */
  trim: $trim2018,

  /**
   * This method removes whitespace from the left and right end of a string.
   * (ES2016)
   * @param {string} string - The string to trim the whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The trimmed string.
   * @example
   * var trim = require('trim-x');
   *
   * trim(' \t\na \t\n') === 'a'; // true
   */
  trim2016: $trim2016,

  /**
   * This method removes whitespace from the left and right end of a string.
   * (ES2018)
   *
   * @param {string} string - The string to trim the whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The trimmed string.
   * @example
   * var trim = require('trim-x');
   *
   * trim(' \t\na \t\n') === 'a'; // true
   */
  trim2018: $trim2018
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for RequireObjectCoercible.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-requireobjectcoercible|7.2.1 RequireObjectCoercible ( argument )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module require-object-coercible-x
 */



var isNil = __webpack_require__(15);

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} value - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 * @example
 * var RequireObjectCoercible = require('require-object-coercible-x');
 *
 * RequireObjectCoercible(); // TypeError
 * RequireObjectCoercible(null); // TypeError
 * RequireObjectCoercible('abc'); // 'abc'
 * RequireObjectCoercible(true); // true
 * RequireObjectCoercible(Symbol('foo')); // Symbol('foo')
 */
module.exports = function RequireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError('Cannot call method on ' + value);
  }

  return value;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Checks if `value` is `null` or `undefined`.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nil-x
 */



var isUndefined = __webpack_require__(5);
var isNull = __webpack_require__(12);

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 * var isNil = require('is-nil-x');
 *
 * isNil(null); // => true
 * isNil(void 0); // => true
 * isNil(NaN); // => false
 */
module.exports = function isNil(value) {
  return isNull(value) || isUndefined(value);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file The constant NaN derived mathematically by 0 / 0.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module nan-x
 */



/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 * @example
 * var NAN = require('nan-x');
 *
 * NAN !== NAN; // true
 * NAN === NAN; // false
 */
module.exports = 0 / 0;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Determine whether the passed value is a zero based index.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-index-x
 */



var safeToString = __webpack_require__(22);
var toInteger = __webpack_require__(24).toInteger2018;
var toNumber = __webpack_require__(4).toNumber2018;
var mathClamp = __webpack_require__(42);
var MAX_SAFE_INTEGER = __webpack_require__(43);
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;

/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 * @example
 * var isIndex = require('is-index-x');
 *
 * isIndex(0);                    // true
 * isIndex(1);                    // true
 * isIndex('10');                 // true
 *
 * isIndex(-100000);              // false
 * isIndex(Math.pow(2, 53));      // false
 * isIndex(0.1);                  // false
 * isIndex(Math.PI);              // false
 * isIndex(NaN);                  // false
 * isIndex(Infinity);             // false
 * isIndex(-Infinity);            // false
 * isIndex(true);                 // false
 * isIndex(false);                // false
 * isIndex([1]);                  // false
 * isIndex(10, 10);               // false
 */
module.exports = function isIndex(value) {
  var string = safeToString(value);
  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = toNumber(string);
  if (arguments.length > 1) {
    return number < mathClamp(toInteger(arguments[1]), MAX_SAFE_INTEGER);
  }

  return number < MAX_SAFE_INTEGER;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(21);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6 abstract ToString with Symbol conversion support.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-symbols-supported-x
 */



var castString = __webpack_require__(2).String;
var pToString = __webpack_require__(23) && Symbol.prototype.toString;
var isSymbol = typeof pToString === 'function' && __webpack_require__(0);

/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} value - The value to convert to a string.
 * @returns {string} The converted value.
 * @example
 * var toStringSymbolsSupported = require('to-string-symbols-supported-x');
 *
 * toStringSymbolsSupported(); // 'undefined'
 * toStringSymbolsSupported(null); // 'null'
 * toStringSymbolsSupported('abc'); // 'abc'
 * toStringSymbolsSupported(true); // 'true'
 * toStringSymbolsSupported(Symbol('foo')); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object(Symbol('foo'))); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object.create(null)); // TypeError
 */
module.exports = function toStringSymbolsSupported(value) {
  return isSymbol && isSymbol(value) ? pToString.call(value) : castString(value);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 Symbol is supported.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */



/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ToInteger converts 'argument' to an integral numeric value.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger|7.1.4 ToInteger ( argument )}
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-integer-x
 */



var libToNumber = __webpack_require__(4);
var toNumber2016 = libToNumber.toNumber2016;
var toNumber2018 = libToNumber.toNumber2018;
var numberIsNaN = __webpack_require__(9);
var numberIsFinite = __webpack_require__(39);
var libMathSign = __webpack_require__(41);
var mathSign2016 = libMathSign.sign2016;
var mathSign2018 = libMathSign.sign2018;
var mathFloor = Math.floor;
var mathAbs = Math.abs;

var $toInteger2016 = function toInteger2016(value) {
  var number = toNumber2016(value);
  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign2016(number) * mathFloor(mathAbs(number));
};

var $toInteger2018 = function toInteger2018(value) {
  var number = toNumber2018(value);
  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign2018(number) * mathFloor(mathAbs(number));
};

module.exports = {
  /**
   * Reference to toInteger2018.
   */
  toInteger: $toInteger2018,

  /**
   * Converts `value` to an integer. (ES2016)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   *
   * @example
   * var toInteger = require('to-integer-x').toInteger2016;
   * toInteger(3); // 3
   * toInteger(Number.MIN_VALUE); // 0
   * toInteger(Infinity); // 1.7976931348623157e+308
   * toInteger('3'); // 3
   */
  toInteger2016: $toInteger2016,

  /**
   * Converts `value` to an integer. (ES2018)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   *
   * @example
   * var toInteger = require('to-integer-x').toInteger2018;
   * toInteger(3); // 3
   * toInteger(Number.MIN_VALUE); // 0
   * toInteger(Infinity); // 1.7976931348623157e+308
   * toInteger('3'); // 3
   */
  toInteger2018: $toInteger2018
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts a JavaScript object to a primitive value.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-primitive-x
 */



var hasSymbols = __webpack_require__(26);
var isPrimitive = __webpack_require__(27);
var isDate = __webpack_require__(10);
var isSymbol = __webpack_require__(0);
var isFunction = __webpack_require__(28);
var requireObjectCoercible = __webpack_require__(14);
var isNil = __webpack_require__(15);
var isUndefined = __webpack_require__(5);
var symToPrimitive = hasSymbols && Symbol.toPrimitive;
var symValueOf = hasSymbols && Symbol.prototype.valueOf;

var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var ordinaryToPrimitive = function _ordinaryToPrimitive(O, hint) {
  requireObjectCoercible(O);
  if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  var method;
  var result;
  for (var i = 0; i < orderLength; i += 1) {
    method = O[methodNames[i]];
    if (isFunction(method)) {
      result = method.call(O);
      if (isPrimitive(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};

var getMethod = function _getMethod(O, P) {
  var func = O[P];
  if (isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
    }

    return func;
  }

  return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {constructor} [prefferedtype] - The preffered type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @example
 * var toPrimitive = require('to-primitive-x');
 *
 * var date = new Date(0);
 * toPrimitive(date)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, String)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, Number)); // 0
 */
module.exports = function toPrimitive(input, preferredType) {
  if (isPrimitive(input)) {
    return input;
  }

  var hint = 'default';
  if (arguments.length > 1) {
    if (preferredType === String) {
      hint = 'string';
    } else if (preferredType === Number) {
      hint = 'number';
    }
  }

  var exoticToPrim;
  if (hasSymbols) {
    if (symToPrimitive) {
      exoticToPrim = getMethod(input, symToPrimitive);
    } else if (isSymbol(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (isUndefined(exoticToPrim) === false) {
    var result = exoticToPrim.call(input, hint);
    if (isPrimitive(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && (isDate(input) || isSymbol(input))) {
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 Symbol is supported.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */



/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Determine whether a given value is a function object.
 * @version 3.3.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-function-x
 */



var attempt = __webpack_require__(29);
var fToString = Function.prototype.toString;
var toBoolean = __webpack_require__(11);
var isFalsey = __webpack_require__(30);
var toStringTag = __webpack_require__(31);
var hasToStringTag = __webpack_require__(32);
var isPrimitive = __webpack_require__(34);
var normalise = __webpack_require__(35).normalizeSpace;
var deComment = __webpack_require__(37);
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;

var hasNativeClass = attempt(function () {
  // eslint-disable-next-line no-new-func
  return Function('"use strict"; return class My {};')();
}).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalise(deComment(fToString.call(value), ' ')));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);

  return result.threw === false && result.value;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */
var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 * @example
 * var isFunction = require('is-function-x');
 *
 * isFunction(); // false
 * isFunction(Number.MIN_VALUE); // false
 * isFunction('abc'); // false
 * isFunction(true); // false
 * isFunction({ name: 'abc' }); // false
 * isFunction(function () {}); // true
 * isFunction(new Function ()); // true
 * isFunction(function* test1() {}); // true
 * isFunction(function test2(a, b) {}); // true
 * isFunction(async function test3() {}); // true
 * isFunction(class Test {}); // false
 * isFunction(class Test {}, true); // true
 * isFunction((x, y) => {return this;}); // true
 */
module.exports = function isFunction(value) {
  if (isPrimitive(value)) {
    return false;
  }

  if (hasToStringTag) {
    return tryFuncToString(value, toBoolean(arguments[1]));
  }

  if (hasNativeClass && isFalsey(arguments[1]) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Invokes function, returning an object of the results.
 * @version 1.1.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module attempt-x
 */



var getArgs = function _getArgs(args) {
  var length = args.length >>> 0;
  var array = [];
  var argLength = length - 1;
  if (argLength < 1) {
    return array;
  }

  array.length = argLength;
  for (var index = 1; index < length; index += 1) {
    array[index - 1] = args[index];
  }

  return array;
};

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {Object} Returns an object of the result.
 * @example
 * var attempt = require('attempt-x');
 *
 * function thrower() {
 *   throw new Error('Threw');
 * }
 *
 * attempt(thrower, 1, 2);
 * // {
 * //   threw: true,
 * //   value: // Error('Threw') object
 * // }
 *
 * function sumArgs(a, b) {
 *   return a + b;
 * }
 *
 * attempt(sumArgs, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 3
 * // }
 *
 * var thisArg = [];
 * function pusher(a, b) {
 *   return this.push(a, b);
 * }
 *
 * attempt.call(thisArg, pusher, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 2
 * // }
 * // thisArg => [1, 2];
 */
module.exports = function attempt(fn) {
  try {
    return {
      threw: false,
      value: fn.apply(this, getArgs(arguments))
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Test if a given value is falsey.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-falsey-x
 */



var toBoolean = __webpack_require__(11);

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 * @example
 * var isFalsey = require('is-falsey-x');
 *
 * isFalsey(); // true
 * isFalsey(0); // true
 * isFalsey(''); // true
 * isFalsey(false); // true
 * isFalsey(null); // true
 *
 * isFalsey(true); // false
 * isFalsey([]); // false
 * isFalsey(1); // false
 * isFalsey(function () {}); // false
 */
module.exports = function isFalsey(value) {
  return toBoolean(value) === false;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Get an object's ES6 @@toStringTag.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring|19.1.3.6 Object.prototype.toString ( )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-tag-x
 */



var isNull = __webpack_require__(12);
var isUndefined = __webpack_require__(5);
var toStr = {}.toString;

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 * @example
 * var toStringTag = require('to-string-tag-x');
 *
 * var o = new Object();
 * toStringTag(o); // returns '[object Object]'
 */
module.exports = function toStringTag(value) {
  if (isNull(value)) {
    return '[object Null]';
  }

  if (isUndefined(value)) {
    return '[object Undefined]';
  }

  return toStr.call(value);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 @@toStringTag is supported.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag|26.3.1 @@toStringTag}
 * @version 1.4.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-to-string-tag-x
 */



/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = __webpack_require__(33) && typeof Symbol.toStringTag === 'symbol';


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 Symbol is supported.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */



/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module normalize-space-x
 */



var libTrim = __webpack_require__(13);
var trim2016 = libTrim.trim2016;
var trim2018 = libTrim.trim2018;
var Rx = __webpack_require__(2).RegExp;
var libWhiteSpace = __webpack_require__(3);
var reNormalize2016 = new Rx('[' + libWhiteSpace.string2016 + ']+', 'g');
var reNormalize2018 = new Rx('[' + libWhiteSpace.string2018 + ']+', 'g');
var replace = ''.replace;

var $normalizeSpace2016 = function normalizeSpace2016(string) {
  return replace.call(trim2016(string), reNormalize2016, ' ');
};

var $normalizeSpace2018 = function normalizeSpace2018(string) {
  return replace.call(trim2018(string), reNormalize2018, ' ');
};

module.exports = {
  /**
   * Reference to normalizeSpace2018.
   */
  normalizeSpace: $normalizeSpace2018,

  /**
   * This method strips leading and trailing white-space from a string,
   * replaces sequences of whitespace characters by a single space,
   * and returns the resulting string. (ES2016)
   *
   * @param {string} string - The string to be normalized.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The normalized string.
   * @example
   * var normalizeSpace = require('normalize-space-x');
   *
   * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
   */
  normalizeSpace2016: $normalizeSpace2016,

  /**
   * This method strips leading and trailing white-space from a string,
   * replaces sequences of whitespace characters by a single space,
   * and returns the resulting string. (ES2018)
   *
   * @param {string} string - The string to be normalized.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The normalized string.
   * @example
   * var normalizeSpace = require('normalize-space-x');
   *
   * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
   */
  normalizeSpace2018: $normalizeSpace2018
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the right end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-right-x
 */



var requireCoercibleToString = __webpack_require__(7);
var Rx = __webpack_require__(2).RegExp;
var reRight2016 = new Rx('[' + __webpack_require__(3).string2016 + ']+$');
var reRight2018 = new Rx('[' + __webpack_require__(3).string2018 + ']+$');
var replace = ''.replace;

var $trimRight2016 = function trimRight2016(string) {
  return replace.call(requireCoercibleToString(string), reRight2016, '');
};

var $trimRight2018 = function trimRight2018(string) {
  return replace.call(requireCoercibleToString(string), reRight2018, '');
};

module.exports = {
  /**
   * A reference to trimRight2018.
   */
  trimRight: $trimRight2018,

  /**
   * This method removes whitespace from the right end of a string. (ES2016)
   *
   * @param {string} string - The string to trim the right end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The right trimmed string.
   * @example
   * var trimRight = require('trim-right-x');
   *
   * trimRight(' \t\na \t\n') === ' \t\na'; // true
   */
  trimRight2016: $trimRight2016,

  /**
   * This method removes whitespace from the right end of a string. (ES2018)
   *
   * @param {string} string - The string to trim the right end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The right trimmed string.
   * @example
   * var trimRight = require('trim-right-x');
   *
   * trimRight(' \t\na \t\n') === ' \t\na'; // true
   */
  trimRight2018: $trimRight2018
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Replace the comments in a string.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module replace-comments-x
 */



var toStr = __webpack_require__(8);
var requireCoercibleToString = __webpack_require__(7);
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var replace = ''.replace;

/**
 * This method replaces comments in a string.
 *
 * @param {string} string - The string to be stripped.
 * @param {string} [replacement] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 * @example
 * var replaceComments = require('replace-comments-x');
 *
 * replaceComments(test;/* test * /, ''), // 'test;'
 * replaceComments(test; // test, ''), // 'test;'
 */
module.exports = function replaceComments(string) {
  return replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? toStr(arguments[1]) : '');
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module parse-int-x
 */



var nativeParseInt = parseInt;
var NAN = __webpack_require__(16);
var toStr = __webpack_require__(8);
var trimLeft2016 = __webpack_require__(6).trimLeft2016;
var trimLeft2018 = __webpack_require__(6).trimLeft2018;
var chachedCtrs = __webpack_require__(2);
var castNumber = chachedCtrs.Number;
var charAt = chachedCtrs.String.prototype.charAt;
var hexRegex = /^[-+]?0[xX]/;
var test = hexRegex.test;

var $parseInt2016 = function parseInt2016(string, radix) {
  var str = trimLeft2016(toStr(string));

  return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
};

var $parseInt2018 = function parseInt2018(string, radix) {
  var str = trimLeft2018(toStr(string));
  if (charAt.call(str, 0) === '\u180E') {
    return NAN;
  }

  return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
};

module.exports = {
  /**
   * Reference to parseInt2018.
   */
  parseInt: $parseInt2018,

  /**
   * This method parses a string argument and returns an integer of the specified
   * radix (the base in mathematical numeral systems). (ES2016)
   *
   * @param {string} string - The value to parse. If the string argument is not a
   *  string, then it is converted to a string (using the ToString abstract
   *  operation). Leading whitespace in the string argument is ignored.
   * @param {number} radix - An integer between 2 and 36 that represents the radix
   *  (the base in mathematical numeral systems) of the above mentioned string.
   *  Specify 10 for the decimal numeral system commonly used by humans. Always
   *  specify this parameter to eliminate reader confusion and to guarantee
   *  predictable behavior. Different implementations produce different results
   *  when a radix is not specified, usually defaulting the value to 10.
   * @throws {TypeError} If target is a Symbol or is not coercible.
   * @returns {number} An integer number parsed from the given string. If the first
   *  character cannot be converted to a number, NaN is returned.
   * @example
   * var $parseInt = require('parse-int-x').parseInt2016;
   *
   * // The following examples all return 15
   * $parseInt(' 0xF', 16);
   * $parseInt(' F', 16);
   * $parseInt('17', 8);
   * $parseInt(021, 8);
   * $parseInt('015', 10);   // $parseInt(015, 10); will return 15
   * $parseInt(15.99, 10);
   * $parseInt('15,123', 10);
   * $parseInt('FXX123', 16);
   * $parseInt('1111', 2);
   * $parseInt('15 * 3', 10);
   * $parseInt('15e2', 10);
   * $parseInt('15px', 10);
   * $parseInt('12', 13);
   *
   * //The following examples all return NaN:
   * $parseInt('Hello', 8); // Not a number at all
   * $parseInt('546', 2);   // Digits are not valid for binary representations
   */
  parseInt2016: $parseInt2016,

  /**
   * This method parses a string argument and returns an integer of the specified
   * radix (the base in mathematical numeral systems). (ES2018)
   *
   * @param {string} string - The value to parse. If the string argument is not a
   *  string, then it is converted to a string (using the ToString abstract
   *  operation). Leading whitespace in the string argument is ignored.
   * @param {number} radix - An integer between 2 and 36 that represents the radix
   *  (the base in mathematical numeral systems) of the above mentioned string.
   *  Specify 10 for the decimal numeral system commonly used by humans. Always
   *  specify this parameter to eliminate reader confusion and to guarantee
   *  predictable behavior. Different implementations produce different results
   *  when a radix is not specified, usually defaulting the value to 10.
   * @throws {TypeError} If target is a Symbol or is not coercible.
   * @returns {number} An integer number parsed from the given string. If the first
   *  character cannot be converted to a number, NaN is returned.
   * @example
   * var $parseInt = require('parse-int-x').parseInt2018;
   *
   * // The following examples all return 15
   * $parseInt(' 0xF', 16);
   * $parseInt(' F', 16);
   * $parseInt('17', 8);
   * $parseInt(021, 8);
   * $parseInt('015', 10);   // $parseInt(015, 10); will return 15
   * $parseInt(15.99, 10);
   * $parseInt('15,123', 10);
   * $parseInt('FXX123', 16);
   * $parseInt('1111', 2);
   * $parseInt('15 * 3', 10);
   * $parseInt('15e2', 10);
   * $parseInt('15px', 10);
   * $parseInt('12', 13);
   *
   * //The following examples all return NaN:
   * $parseInt('Hello', 8); // Not a number at all
   * $parseInt('546', 2);   // Digits are not valid for binary representations
   */
  parseInt2018: $parseInt2018
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for Number.isFinite.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite|20.1.2.2 Number.isFinite ( number )}
 * @version 3.0.4
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-finite-x
 */



var numberIsNaN = __webpack_require__(9);
var INFINITY = __webpack_require__(40);

/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 * @example
 * var numIsFinite = require('is-finite-x');
 *
 * numIsFinite(Infinity);  // false
 * numIsFinite(NaN);       // false
 * numIsFinite(-Infinity); // false
 *
 * numIsFinite(0);         // true
 * numIsFinite(2e64);      // true
 *
 * numIsFinite('0');       // false, would've been true with
 *                         // global isFinite('0')
 * numIsFinite(null);      // false, would've been true with
 */
module.exports = function isFinite(number) {
  return typeof number === 'number' && numberIsNaN(number) === false && number !== INFINITY && number !== -INFINITY;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file The constant value Infinity.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module infinity-x
 */



/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 * @example
 * var INFINITY = require('infinity-x');
 *
 * INFINITY === Infinity; // true
 * -INFINITY === -Infinity; // true
 * INFINITY === -Infinity; // false
 */
module.exports = 1 / 0;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Shim for Math.sign.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-math.sign|20.2.2.29 Math.sign(x)}
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module math-sign-x
 */



var libToNumber = __webpack_require__(4);
var toNumber2016 = libToNumber.toNumber2016;
var toNumber2018 = libToNumber.toNumber2018;
var numberIsNaN = __webpack_require__(9);

var $sign2016 = function sign2016(x) {
  var n = toNumber2016(x);
  if (n === 0 || numberIsNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

var $sign2018 = function sign2018(x) {
  var n = toNumber2018(x);
  if (n === 0 || numberIsNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

module.exports = {
  /**
   * Reference to sign2018.
   */
  sign: $sign2018,

  /**
   * This method returns the sign of a number, indicating whether the number is positive,
   * negative or zero. (ES2016)
   *
   * @param {*} x - A number.
   * @returns {number} A number representing the sign of the given argument. If the argument
   * is a positive number, negative number, positive zero or negative zero, the function will
   * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
   * @example
   * var mathSign = require('math-sign-x').sign2016;
   *
   * mathSign(3);     //  1
   * mathSign(-3);    // -1
   * mathSign('-3');  // -1
   * mathSign(0);     //  0
   * mathSign(-0);    // -0
   * mathSign(NaN);   // NaN
   * mathSign('foo'); // NaN
   * mathSign();      // NaN
   */
  sign2016: $sign2016,

  /**
   * This method returns the sign of a number, indicating whether the number is positive,
   * negative or zero. (ES2018)
   *
   * @param {*} x - A number.
   * @returns {number} A number representing the sign of the given argument. If the argument
   * is a positive number, negative number, positive zero or negative zero, the function will
   * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
   * @example
   * var mathSign = require('math-sign-x').sign2018;
   *
   * mathSign(3);     //  1
   * mathSign(-3);    // -1
   * mathSign('-3');  // -1
   * mathSign(0);     //  0
   * mathSign(-0);    // -0
   * mathSign(NaN);   // NaN
   * mathSign('foo'); // NaN
   * mathSign();      // NaN
   */
  sign2018: $sign2018
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Clamp a number to limits.
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module math-clamp-x
 */



var toNumber = __webpack_require__(4).toNumber2018;

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @return {number} The clamped number.
 * @example
 * var mathClamp = require('math-clamp-x');
 */
module.exports = function clamp(value) {
  var number = toNumber(value);
  var argsLength = arguments.length;
  if (argsLength < 2) {
    return number;
  }

  var min = toNumber(arguments[1]);
  var max;
  if (argsLength < 3) {
    max = min;
    min = 0;
  } else {
    max = toNumber(arguments[2]);
  }

  if (min > max) {
    throw new RangeError('"min" must be less than "max"');
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function toObject(value) {
  return castObject(requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(1);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(10);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/is-falsey-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function isFalsey(value) {
  return !to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/to-string-x/dist/to-string-x.esm.js

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function requireCoercibleToString(value) {
  return ToString(require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft, EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight2016 = new trim_right_x_esm_RegExpCtr("[".concat(string2016, "]+$"));
var reRight2018 = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_replace = trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2016(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2016, trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2018(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2018, trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize2016 = new normalize_space_x_esm_RegExpCtr("[".concat(string2016, "]+"), 'g');
var reNormalize2018 = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalizeSpace2016(string) {
  return normalize_space_x_esm_replace.call(trim2016(string), reNormalize2016, SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalizeSpace2018(string) {
  return normalize_space_x_esm_replace.call(trim2018(string), reNormalize2018, SPACE);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_replace = replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replaceComments(string, replacement) {
  return replace_comments_x_esm_replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? ToString(replacement) : replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm_this = undefined;

function is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_esm_SPACE = ' ';
var fToString = Function.prototype.toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = attempt(function () {
  is_function_x_esm_newArrowCheck(this, is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalizeSpace2018(replaceComments(fToString.call(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, toBoolean(allowClass));
  }

  if (hasNativeClass && isFalsey(allowClass) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
/** @type {StringConstructor} */

var StringCtr = STRING.constructor;
/** @type {NumberConstructor} */

var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (isFunction(method)) {
      result = method.call(ordinary);

      if (is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_esm_isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function toPrimitive(input, preferredType) {
  if (is_primitive_default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/to-property-key-x/dist/to-property-key-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */

function toPropertyKey(argument) {
  var key = toPrimitive(argument, String);
  return has_symbol_support_x_esm && _typeof(key) === 'symbol' ? key : ToString(key);
}


// CONCATENATED MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js


var hop = {}.hasOwnProperty;
/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|Symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 */

function has_own_property_x_esm_hasOwnProperty(object, property) {
  return hop.call(toObject(object), toPropertyKey(property));
}


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(17);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/is-index-x/index.js
var is_index_x = __webpack_require__(18);
var is_index_x_default = /*#__PURE__*/__webpack_require__.n(is_index_x);

// CONCATENATED MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js


var propIsEnumerable = {}.propertyIsEnumerable;
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|Symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

function propertyIsEnumerable(object, property) {
  return propIsEnumerable.call(toObject(object), toPropertyKey(property));
}


// CONCATENATED MODULE: ./dist/object-get-own-property-descriptor-x.esm.js










/** @type {ObjectConstructor} */

var object_get_own_property_descriptor_x_esm_castObject = {}.constructor;
var nativeGOPD = typeof object_get_own_property_descriptor_x_esm_castObject.getOwnPropertyDescriptor === 'function' && object_get_own_property_descriptor_x_esm_castObject.getOwnPropertyDescriptor;
var getOPDFallback1;
var getOPDFallback2; // ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var object_get_own_property_descriptor_x_esm_doesGOPDWork = function doesGOPDWork(object, prop) {
  object[toPropertyKey(prop)] = 0;
  var testResult = attempt(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
}; // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.

/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */


var $getOwnPropertyDescriptor;

if (nativeGOPD) {
  var doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = doc ? object_get_own_property_descriptor_x_esm_doesGOPDWork(doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    var res = attempt(nativeGOPD, object_get_own_property_descriptor_x_esm_castObject('abc'), 1);
    var worksWithStr = res.threw === false && res.value && res.value.value === 'b';

    if (worksWithStr) {
      var getOPDWorksOnObject = object_get_own_property_descriptor_x_esm_doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        var worksWithPrim = attempt(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */

        var worksWithObjSym = has_symbol_support_x_esm && object_get_own_property_descriptor_x_esm_doesGOPDWork({}, object_get_own_property_descriptor_x_esm_castObject(Symbol('')));

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
  var prototypeOfObject = object_get_own_property_descriptor_x_esm_castObject.prototype; // If JS engine supports accessors creating shortcuts.

  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = has_own_property_x_esm_hasOwnProperty(prototypeOfObject, '__defineGetter__');

  if (supportsAccessors) {
    /* eslint-disable-next-line no-underscore-dangle */
    var lg = prototypeOfObject.__lookupGetter__;
    /* eslint-disable-next-line no-underscore-dangle */

    var ls = prototypeOfObject.__lookupSetter__;

    lookupGetter = function $lookupGetter(object, property) {
      return lg.call(object, property);
    };

    lookupSetter = function $lookupSetter(object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    var obj = toObject(object);
    var propKey = toPropertyKey(property);
    var result; // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.

    if (getOPDFallback1) {
      result = attempt.call(object_get_own_property_descriptor_x_esm_castObject, getOPDFallback1, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }

    var isStringIndex = is_string_default()(obj) && is_index_x_default()(propKey, obj.length);

    if (getOPDFallback2 && isStringIndex === false) {
      result = attempt.call(object_get_own_property_descriptor_x_esm_castObject, getOPDFallback2, obj, propKey);

      if (result.threw === false) {
        return result.value;
      } // try the shim if the real one doesn't work

    }
    /* eslint-disable-next-line no-void */


    var descriptor = void 0; // If object does not owns property return undefined immediately.

    if (isStringIndex === false && has_own_property_x_esm_hasOwnProperty(obj, propKey) === false) {
      return descriptor;
    } // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.


    descriptor = {
      configurable: is_primitive_default()(object) === false && isStringIndex === false,
      enumerable: propertyIsEnumerable(obj, propKey)
    }; // If JS engine supports accessor properties then property may be a
    // getter or setter.

    if (supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.

      /* eslint-disable-next-line no-proto */
      var prototype = obj.__proto__;
      var notPrototypeOfObject = obj !== prototypeOfObject; // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor

      if (notPrototypeOfObject) {
        /* eslint-disable-next-line no-proto */
        obj.__proto__ = prototypeOfObject;
      }

      var getter = lookupGetter(obj, propKey);
      var setter = lookupSetter(obj, propKey);

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
        } // If it was accessor property we're done and return here
        // in order to avoid adding `value` to the descriptor.


        return descriptor;
      }
    } // If we got this far we know that object has an own property that is
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

var gOPS = $getOwnPropertyDescriptor;
/* harmony default export */ var object_get_own_property_descriptor_x_esm = __webpack_exports__["default"] = (gOPS);



/***/ })
/******/ ]);
});
//# sourceMappingURL=object-get-own-property-descriptor-x.js.map