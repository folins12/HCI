/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");
channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../stylesheets/application'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.






_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_1__["start"]();

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x, k) {
        var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "",
          j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
              begin = clamp(from, length),
              end = length,
              num,
              target,
              targetArray,
              sourceArray;
            if (to !== undefined) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
          buff = new ArrayBuffer(length),
          arr = new Uint8Array(buff),
          i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [],
          length = hex.length,
          x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
          i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
          tmp,
          lo,
          hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
          length = buff.length,
          i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  });
  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);
    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }
    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);
        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();
  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
      cancelable = eventInit.cancelable,
      detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;
      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");
      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};
        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }
        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
          responseType = _xhr.responseType,
          response = _xhr.response;
        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();
  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;
      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
        url = _blob$directUploadDat.url,
        headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";
      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
          status = _xhr.status,
          response = _xhr.response;
        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();
  var id = 0;
  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }
    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }
          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();
  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }
      return object[methodName].apply(object, messages);
    }
  }
  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);
            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }
          _this.dispatch("end");
          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;
        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });
        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;
        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }
    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var controllers = this.createDirectUploadControllers();
        var startNextController = function startNextController() {
          var controller = controllers.shift();
          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);
                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();
            _this.dispatch("end");
          }
        };
        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;
  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    var target = event.target;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    var form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);
        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      var _button = button,
        disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm["delete"](form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }
  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;
      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };
      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };
      expando = '_ujsData';
      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };
      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }
        return element[expando][key] = value;
      };
      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;
      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };
      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };
      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();
        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };
      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();
        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;
      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;
        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);
          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }
          return result;
        };
      }
      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };
      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };
      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;
          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }
          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };
      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));
          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });
        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }
        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };
      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();
        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }
        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }
        return options;
      };
      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);
        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }
        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };
        return xhr;
      };
      processResponse = function processResponse(response, type) {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');
            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }
        return response;
      };
      Rails.href = function (element) {
        return element.href;
      };
      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;
      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };
      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }
        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }
          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }
          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });
        if (additionalParam) {
          params.push(additionalParam);
        }
        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };
      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;
      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };
      Rails.confirm = function (message, element) {
        return confirm(message);
      };
      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');
        if (!message) {
          return true;
        }
        answer = false;
        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}
          callback = fire(element, 'confirm:complete', [answer]);
        }
        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;
      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;
        if (element.disabled) {
          return stopEverything(e);
        }
      };
      Rails.enableElement = function (e) {
        var element;
        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }
          element = e.target;
        } else {
          element = e;
        }
        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };
      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };
      disableLinkElement = function disableLinkElement(element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }
        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };
      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }
        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };
      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };
      disableFormElement = function disableFormElement(element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }
        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };
      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };
      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }
          setData(element, 'ujs:enable-with', null);
        }
        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };
      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;
      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');
        if (!method) {
          return;
        }
        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
        fire,
        getData,
        isCrossDomain,
        isRemote,
        matches,
        serializeElement,
        setData,
        stopEverything,
        slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;
      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };
      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element)) {
          return true;
        }
        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }
        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';
        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;
          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }
          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);
            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }
          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };
      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;
        if (!form) {
          return;
        }
        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };
      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;
        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;
      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }
      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }
        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };
      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);
  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/*! exports provided: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offcanvas", function() { return Offcanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return ScrollSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */


/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var elementMap = new Map();
var Data = {
  set: function set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }
    var instanceMap = elementMap.get(element);

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
      return;
    }
    instanceMap.set(key, instance);
  },
  get: function get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove: function remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    var instanceMap = elementMap.get(element);
    instanceMap["delete"](key);

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap["delete"](element);
    }
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend';

/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */
var parseSelector = function parseSelector(selector) {
  if (selector && window.CSS && window.CSS.escape) {
    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, function (match, id) {
      return "#".concat(CSS.escape(id));
    });
  }
  return selector;
};

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
var toType = function toType(object) {
  if (object === null || object === undefined) {
    return "".concat(object);
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};

/**
 * Public Util API
 */

var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  var _window$getComputedSt = window.getComputedStyle(element),
    transitionDuration = _window$getComputedSt.transitionDuration,
    transitionDelay = _window$getComputedSt.transitionDelay;
  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};
var isElement = function isElement(object) {
  if (!object || _typeof(object) !== 'object') {
    return false;
  }
  if (typeof object.jquery !== 'undefined') {
    object = object[0];
  }
  return typeof object.nodeType !== 'undefined';
};
var getElement = function getElement(object) {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
var isVisible = function isVisible(element) {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }
  var elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  // Handle `details` element as its content may falsie appear visible when it is closed
  var closedDetails = element.closest('details:not([open])');
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    var summary = element.closest('summary');
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
var isDisabled = function isDisabled(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains('disabled')) {
    return true;
  }
  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }
  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
var _findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  }

  // Can find the shadow root otherwise it'll return the document
  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }

  // when we don't find a shadow root
  if (!element.parentNode) {
    return null;
  }
  return _findShadowRoot(element.parentNode);
};
var noop = function noop() {};

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
var reflow = function reflow(element) {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};
var getjQuery = function getjQuery() {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery;
  }
  return null;
};
var DOMContentLoadedCallbacks = [];
var onDOMContentLoaded = function onDOMContentLoaded(callback) {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', function () {
        for (var _i = 0, _DOMContentLoadedCall = DOMContentLoadedCallbacks; _i < _DOMContentLoadedCall.length; _i++) {
          var _callback = _DOMContentLoadedCall[_i];
          _callback();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
var isRTL = function isRTL() {
  return document.documentElement.dir === 'rtl';
};
var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */
    if ($) {
      var name = plugin.NAME;
      var JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;
      $.fn[name].noConflict = function () {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
var execute = function execute(possibleCallback) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : possibleCallback;
  return typeof possibleCallback === 'function' ? possibleCallback.apply(void 0, _toConsumableArray(args)) : defaultValue;
};
var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
  var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;
  var _handler = function handler(_ref) {
    var target = _ref.target;
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, _handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, _handler);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};

/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */
var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
  var listLength = list.length;
  var index = list.indexOf(activeElement);

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage
var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  var uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }
    return fn.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);
    for (var target = event.target; target && target !== this; target = target.parentNode) {
      var _iterator = _createForOfIteratorHelper(domElements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var domElement = _step.value;
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
}
function findHandler(events, callable) {
  var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return Object.values(events).find(function (event) {
    return event.callable === callable && event.delegationSelector === delegationSelector;
  });
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  var isDelegated = typeof handler === 'string';
  // TODO: tooltip passes `false` instead of selector, so we need to check
  var callable = isDelegated ? delegationFunction : handler || delegationFunction;
  var typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }
  var _normalizeParameters = normalizeParameters(originalTypeEvent, handler, delegationFunction),
    _normalizeParameters2 = _slicedToArray(_normalizeParameters, 3),
    isDelegated = _normalizeParameters2[0],
    callable = _normalizeParameters2[1],
    typeEvent = _normalizeParameters2[2];

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    var wrapFunction = function wrapFunction(fn) {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  var events = getElementEvents(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  var uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn) {
    return;
  }
  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  for (var _i2 = 0, _Object$entries = Object.entries(storeElementEvent); _i2 < _Object$entries.length; _i2++) {
    var _ref2 = _Object$entries[_i2];
    var _ref3 = _slicedToArray(_ref2, 2);
    var handlerKey = _ref3[0];
    var event = _ref3[1];
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}
var EventHandler = {
  on: function on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one: function one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    var _normalizeParameters3 = normalizeParameters(originalTypeEvent, handler, delegationFunction),
      _normalizeParameters4 = _slicedToArray(_normalizeParameters3, 3),
      isDelegated = _normalizeParameters4[0],
      callable = _normalizeParameters4[1],
      typeEvent = _normalizeParameters4[2];
    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getElementEvents(element);
    var storeElementEvent = events[typeEvent] || {};
    var isNamespace = originalTypeEvent.startsWith('.');
    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (var _i3 = 0, _Object$keys = Object.keys(events); _i3 < _Object$keys.length; _i3++) {
        var elementEvent = _Object$keys[_i3];
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (var _i4 = 0, _Object$entries2 = Object.entries(storeElementEvent); _i4 < _Object$entries2.length; _i4++) {
      var _ref4 = _Object$entries2[_i4];
      var _ref5 = _slicedToArray(_ref4, 2);
      var keyHandlers = _ref5[0];
      var event = _ref5[1];
      var handlerKey = keyHandlers.replace(stripUidRegex, '');
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }
    var $ = getjQuery();
    var typeEvent = getTypeEvent(event);
    var inNamespace = event !== typeEvent;
    var jQueryEvent = null;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    var evt = hydrateObj(new Event(event, {
      bubbles: bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj) {
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _loop = function _loop() {
      var _ref6 = _Object$entries3[_i5];
      _ref7 = _slicedToArray(_ref6, 2);
      var key = _ref7[0];
      var value = _ref7[1];
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get: function get() {
            return value;
          }
        });
      }
    },
    _ref7;
  for (var _i5 = 0, _Object$entries3 = Object.entries(meta); _i5 < _Object$entries3.length; _i5++) {
    _loop();
  }
  return obj;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === '' || value === 'null') {
    return null;
  }
  if (typeof value !== 'string') {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-".concat(chr.toLowerCase());
  });
}
var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }
    var attributes = {};
    var bsKeys = Object.keys(element.dataset).filter(function (key) {
      return key.startsWith('bs') && !key.startsWith('bsConfig');
    });
    var _iterator2 = _createForOfIteratorHelper(bsKeys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var key = _step2.value;
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Class definition
 */
var Config = /*#__PURE__*/function () {
  function Config() {
    _classCallCheck(this, Config);
  }
  return _createClass(Config, [{
    key: "_getConfig",
    value: function _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      return config;
    }
  }, {
    key: "_mergeConfigObj",
    value: function _mergeConfigObj(config, element) {
      var jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), _typeof(jsonConfig) === 'object' ? jsonConfig : {}), isElement(element) ? Manipulator.getDataAttributes(element) : {}), _typeof(config) === 'object' ? config : {});
    }
  }, {
    key: "_typeCheckConfig",
    value: function _typeCheckConfig(config) {
      var configTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
      for (var _i6 = 0, _Object$entries4 = Object.entries(configTypes); _i6 < _Object$entries4.length; _i6++) {
        var _ref8 = _Object$entries4[_i6];
        var _ref9 = _slicedToArray(_ref8, 2);
        var property = _ref9[0];
        var expectedTypes = _ref9[1];
        var value = config[property];
        var valueType = isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
        }
      }
    }
  }], [{
    key: "Default",
    get:
    // Getters
    function get() {
      return {};
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return {};
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }]);
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */
var VERSION = '5.3.3';

/**
 * Class definition
 */
var BaseComponent = /*#__PURE__*/function (_Config) {
  function BaseComponent(element, config) {
    var _this;
    _classCallCheck(this, BaseComponent);
    _this = _callSuper(this, BaseComponent);
    element = getElement(element);
    if (!element) {
      return _possibleConstructorReturn(_this);
    }
    _this._element = element;
    _this._config = _this._getConfig(config);
    Data.set(_this._element, _this.constructor.DATA_KEY, _this);
    return _this;
  }

  // Public
  _inherits(BaseComponent, _Config);
  return _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var propertyName = _step3.value;
          this[propertyName] = null;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(callback, element) {
      var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      executeAfterTransition(callback, element, isAnimated);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
  }], [{
    key: "getInstance",
    value: function getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.".concat(this.NAME);
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return ".".concat(this.DATA_KEY);
    }
  }, {
    key: "eventName",
    value: function eventName(name) {
      return "".concat(name).concat(this.EVENT_KEY);
    }
  }]);
}(Config);
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-bs-target');
  if (!selector || selector === '#') {
    var hrefAttribute = element.getAttribute('href');

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
      return null;
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = "#".concat(hrefAttribute.split('#')[1]);
    }
    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }
  return selector ? selector.split(',').map(function (sel) {
    return parseSelector(sel);
  }).join(',') : null;
};
var SelectorEngine = {
  find: function find(selector) {
    var _ref10;
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref10 = []).concat.apply(_ref10, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
  },
  findOne: function findOne(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref11;
    return (_ref11 = []).concat.apply(_ref11, _toConsumableArray(element.children)).filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next: function next(element, selector) {
    var next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren: function focusableChildren(element) {
    var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
      return "".concat(selector, ":not([tabindex^=\"-\"])");
    }).join(',');
    return this.find(focusables, element).filter(function (el) {
      return !isDisabled(el) && isVisible(el);
    });
  },
  getSelectorFromElement: function getSelectorFromElement(element) {
    var selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector: function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector: function getMultipleElementsFromSelector(element) {
    var selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var enableDismissTrigger = function enableDismissTrigger(component) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
  var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
  var name = component.NAME;
  EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    var target = SelectorEngine.getElementFromSelector(this) || this.closest(".".concat(name));
    var instance = component.getOrCreateInstance(target);

    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
    instance[method]();
  });
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$f = 'alert';
var DATA_KEY$a = 'bs.alert';
var EVENT_KEY$b = ".".concat(DATA_KEY$a);
var EVENT_CLOSE = "close".concat(EVENT_KEY$b);
var EVENT_CLOSED = "closed".concat(EVENT_KEY$b);
var CLASS_NAME_FADE$5 = 'fade';
var CLASS_NAME_SHOW$8 = 'show';

/**
 * Class definition
 */
var Alert = /*#__PURE__*/function (_BaseComponent) {
  function Alert() {
    _classCallCheck(this, Alert);
    return _callSuper(this, Alert, arguments);
  }
  _inherits(Alert, _BaseComponent);
  return _createClass(Alert, [{
    key: "close",
    value:
    // Public
    function close() {
      var _this2 = this;
      var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(function () {
        return _this2._destroyElement();
      }, this._element, isAnimated);
    }

    // Private
  }, {
    key: "_destroyElement",
    value: function _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }

    // Static
  }], [{
    key: "NAME",
    get:
    // Getters
    function get() {
      return NAME$f;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Alert.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config](this);
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
enableDismissTrigger(Alert, 'close');

/**
 * jQuery
 */

defineJQueryPlugin(Alert);

/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$e = 'button';
var DATA_KEY$9 = 'bs.button';
var EVENT_KEY$a = ".".concat(DATA_KEY$9);
var DATA_API_KEY$6 = '.data-api';
var CLASS_NAME_ACTIVE$3 = 'active';
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);

/**
 * Class definition
 */
var Button = /*#__PURE__*/function (_BaseComponent2) {
  function Button() {
    _classCallCheck(this, Button);
    return _callSuper(this, Button, arguments);
  }
  _inherits(Button, _BaseComponent2);
  return _createClass(Button, [{
    key: "toggle",
    value:
    // Public
    function toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }

    // Static
  }], [{
    key: "NAME",
    get:
    // Getters
    function get() {
      return NAME$e;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Button.getOrCreateInstance(this);
        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  var data = Button.getOrCreateInstance(button);
  data.toggle();
});

/**
 * jQuery
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$d = 'swipe';
var EVENT_KEY$9 = '.bs.swipe';
var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$9);
var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$9);
var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$9);
var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$9);
var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$9);
var POINTER_TYPE_TOUCH = 'touch';
var POINTER_TYPE_PEN = 'pen';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SWIPE_THRESHOLD = 40;
var Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
var DefaultType$c = {
  endCallback: '(function|null)',
  leftCallback: '(function|null)',
  rightCallback: '(function|null)'
};

/**
 * Class definition
 */
var Swipe = /*#__PURE__*/function (_Config2) {
  function Swipe(element, config) {
    var _this3;
    _classCallCheck(this, Swipe);
    _this3 = _callSuper(this, Swipe);
    _this3._element = element;
    if (!element || !Swipe.isSupported()) {
      return _possibleConstructorReturn(_this3);
    }
    _this3._config = _this3._getConfig(config);
    _this3._deltaX = 0;
    _this3._supportPointerEvents = Boolean(window.PointerEvent);
    _this3._initEvents();
    return _this3;
  }

  // Getters
  _inherits(Swipe, _Config2);
  return _createClass(Swipe, [{
    key: "dispose",
    value:
    // Public
    function dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }

    // Private
  }, {
    key: "_start",
    value: function _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
  }, {
    key: "_end",
    value: function _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
  }, {
    key: "_move",
    value: function _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      var direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      var _this4 = this;
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
          return _this4._start(event);
        });
        EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
          return _this4._end(event);
        });
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
          return _this4._start(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
          return _this4._move(event);
        });
        EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
          return _this4._end(event);
        });
      }
    }
  }, {
    key: "_eventIsPointerPenTouch",
    value: function _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$c;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$c;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$d;
    }
  }, {
    key: "isSupported",
    value: function isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }]);
}(Config);
/**
 * --------------------------------------------------------------------------
 * Bootstrap carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */
var NAME$c = 'carousel';
var DATA_KEY$8 = 'bs.carousel';
var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
var DATA_API_KEY$5 = '.data-api';
var ARROW_LEFT_KEY$1 = 'ArrowLeft';
var ARROW_RIGHT_KEY$1 = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var ORDER_NEXT = 'next';
var ORDER_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var EVENT_SLIDE = "slide".concat(EVENT_KEY$8);
var EVENT_SLID = "slid".concat(EVENT_KEY$8);
var EVENT_KEYDOWN$1 = "keydown".concat(EVENT_KEY$8);
var EVENT_MOUSEENTER$1 = "mouseenter".concat(EVENT_KEY$8);
var EVENT_MOUSELEAVE$1 = "mouseleave".concat(EVENT_KEY$8);
var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$8);
var EVENT_LOAD_DATA_API$3 = "load".concat(EVENT_KEY$8).concat(DATA_API_KEY$5);
var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$5);
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$2 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var KEY_TO_DIRECTION = _defineProperty(_defineProperty({}, ARROW_LEFT_KEY$1, DIRECTION_RIGHT), ARROW_RIGHT_KEY$1, DIRECTION_LEFT);
var Default$b = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
};
var DefaultType$b = {
  interval: '(number|boolean)',
  // TODO:v6 remove boolean support
  keyboard: 'boolean',
  pause: '(string|boolean)',
  ride: '(boolean|string)',
  touch: 'boolean',
  wrap: 'boolean'
};

/**
 * Class definition
 */
var Carousel = /*#__PURE__*/function (_BaseComponent3) {
  function Carousel(element, config) {
    var _this5;
    _classCallCheck(this, Carousel);
    _this5 = _callSuper(this, Carousel, [element, config]);
    _this5._interval = null;
    _this5._activeElement = null;
    _this5._isSliding = false;
    _this5.touchTimeout = null;
    _this5._swipeHelper = null;
    _this5._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this5._element);
    _this5._addEventListeners();
    if (_this5._config.ride === CLASS_NAME_CAROUSEL) {
      _this5.cycle();
    }
    return _this5;
  }

  // Getters
  _inherits(Carousel, _BaseComponent3);
  return _createClass(Carousel, [{
    key: "next",
    value:
    // Public
    function next() {
      this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      // FIXME TODO use `document.visibilityState`
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
  }, {
    key: "cycle",
    value: function cycle() {
      var _this6 = this;
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(function () {
        return _this6.nextWhenVisible();
      }, this._config.interval);
    }
  }, {
    key: "_maybeEnableCycle",
    value: function _maybeEnableCycle() {
      var _this7 = this;
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, function () {
          return _this7.cycle();
        });
        return;
      }
      this.cycle();
    }
  }, {
    key: "to",
    value: function to(index) {
      var _this8 = this;
      var items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, function () {
          return _this8.to(index);
        });
        return;
      }
      var activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      _superPropGet(Carousel, "dispose", this, 3)([]);
    }

    // Private
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this9 = this;
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, function (event) {
          return _this9._keydown(event);
        });
      }
      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, function () {
          return _this9.pause();
        });
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, function () {
          return _this9._maybeEnableCycle();
        });
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this10 = this;
      var _iterator4 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var img = _step4.value;
          EventHandler.on(img, EVENT_DRAG_START, function (event) {
            return event.preventDefault();
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var endCallBack = function endCallBack() {
        if (_this10._config.pause !== 'hover') {
          return;
        }

        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling

        _this10.pause();
        if (_this10.touchTimeout) {
          clearTimeout(_this10.touchTimeout);
        }
        _this10.touchTimeout = setTimeout(function () {
          return _this10._maybeEnableCycle();
        }, TOUCHEVENT_COMPAT_WAIT + _this10._config.interval);
      };
      var swipeConfig = {
        leftCallback: function leftCallback() {
          return _this10._slide(_this10._directionToOrder(DIRECTION_LEFT));
        },
        rightCallback: function rightCallback() {
          return _this10._slide(_this10._directionToOrder(DIRECTION_RIGHT));
        },
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
  }, {
    key: "_keydown",
    value: function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      var direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      var newActiveIndicator = SelectorEngine.findOne("[data-bs-slide-to=\"".concat(index, "\"]"), this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute('aria-current', 'true');
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
  }, {
    key: "_slide",
    value: function _slide(order) {
      var _this11 = this;
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this._isSliding) {
        return;
      }
      var activeElement = this._getActive();
      var isNext = order === ORDER_NEXT;
      var nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      var nextElementIndex = this._getItemIndex(nextElement);
      var triggerEvent = function triggerEvent(eventName) {
        return EventHandler.trigger(_this11._element, eventName, {
          relatedTarget: nextElement,
          direction: _this11._orderToDirection(order),
          from: _this11._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      var slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        // TODO: change tests that use empty divs to avoid this check
        return;
      }
      var isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      var completeCallBack = function completeCallBack() {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        _this11._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
  }, {
    key: "_getActive",
    value: function _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
  }, {
    key: "_getItems",
    value: function _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
  }, {
    key: "_clearInterval",
    value: function _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$b;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$b;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$c;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Carousel.getOrCreateInstance(this, config);
        if (typeof config === 'number') {
          data.to(config);
          return;
        }
        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        }
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
  var target = SelectorEngine.getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  var carousel = Carousel.getOrCreateInstance(target);
  var slideIndex = this.getAttribute('data-bs-slide-to');
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  var _iterator5 = _createForOfIteratorHelper(carousels),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var carousel = _step5.value;
      Carousel.getOrCreateInstance(carousel);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(Carousel);

/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$b = 'collapse';
var DATA_KEY$7 = 'bs.collapse';
var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
var DATA_API_KEY$4 = '.data-api';
var EVENT_SHOW$6 = "show".concat(EVENT_KEY$7);
var EVENT_SHOWN$6 = "shown".concat(EVENT_KEY$7);
var EVENT_HIDE$6 = "hide".concat(EVENT_KEY$7);
var EVENT_HIDDEN$6 = "hidden".concat(EVENT_KEY$7);
var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$7).concat(DATA_API_KEY$4);
var CLASS_NAME_SHOW$7 = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
var Default$a = {
  parent: null,
  toggle: true
};
var DefaultType$a = {
  parent: '(null|element)',
  toggle: 'boolean'
};

/**
 * Class definition
 */
var Collapse = /*#__PURE__*/function (_BaseComponent4) {
  function Collapse(element, config) {
    var _this12;
    _classCallCheck(this, Collapse);
    _this12 = _callSuper(this, Collapse, [element, config]);
    _this12._isTransitioning = false;
    _this12._triggerArray = [];
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    var _iterator6 = _createForOfIteratorHelper(toggleList),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var elem = _step6.value;
        var selector = SelectorEngine.getSelectorFromElement(elem);
        var filterElement = SelectorEngine.find(selector).filter(function (foundElement) {
          return foundElement === _this12._element;
        });
        if (selector !== null && filterElement.length) {
          _this12._triggerArray.push(elem);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    _this12._initializeChildren();
    if (!_this12._config.parent) {
      _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown());
    }
    if (_this12._config.toggle) {
      _this12.toggle();
    }
    return _this12;
  }

  // Getters
  _inherits(Collapse, _BaseComponent4);
  return _createClass(Collapse, [{
    key: "toggle",
    value:
    // Public
    function toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this13 = this;
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      var activeChildren = [];

      // find active children
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(function (element) {
          return element !== _this13._element;
        }).map(function (element) {
          return Collapse.getOrCreateInstance(element, {
            toggle: false
          });
        });
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      var _iterator7 = _createForOfIteratorHelper(activeChildren),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var activeInstance = _step7.value;
          activeInstance.hide();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      var complete = function complete() {
        _this13._isTransitioning = false;
        _this13._element.classList.remove(CLASS_NAME_COLLAPSING);
        _this13._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        _this13._element.style[dimension] = '';
        EventHandler.trigger(_this13._element, EVENT_SHOWN$6);
      };
      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll".concat(capitalizedDimension);
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this14 = this;
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      var dimension = this._getDimension();
      this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      var _iterator8 = _createForOfIteratorHelper(this._triggerArray),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var trigger = _step8.value;
          var element = SelectorEngine.getElementFromSelector(trigger);
          if (element && !this._isShown(element)) {
            this._addAriaAndCollapsedClass([trigger], false);
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._isTransitioning = true;
      var complete = function complete() {
        _this14._isTransitioning = false;
        _this14._element.classList.remove(CLASS_NAME_COLLAPSING);
        _this14._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(_this14._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = '';
      this._queueCallback(complete, this._element, true);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }

    // Private
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values
      config.parent = getElement(config.parent);
      return config;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
  }, {
    key: "_initializeChildren",
    value: function _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      var children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      var _iterator9 = _createForOfIteratorHelper(children),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var element = _step9.value;
          var selected = SelectorEngine.getElementFromSelector(element);
          if (selected) {
            this._addAriaAndCollapsedClass([element], this._isShown(selected));
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "_getFirstLevelChildren",
    value: function _getFirstLevelChildren(selector) {
      var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      // remove children if greater depth
      return SelectorEngine.find(selector, this._config.parent).filter(function (element) {
        return !children.includes(element);
      });
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      var _iterator10 = _createForOfIteratorHelper(triggerArray),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var element = _step10.value;
          element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
          element.setAttribute('aria-expanded', isOpen);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$a;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$a;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      var _config = {};
      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function () {
        var data = Collapse.getOrCreateInstance(this, _config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        }
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }
  var _iterator11 = _createForOfIteratorHelper(SelectorEngine.getMultipleElementsFromSelector(this)),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var element = _step11.value;
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(Collapse);

/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$a = 'dropdown';
var DATA_KEY$6 = 'bs.dropdown';
var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
var DATA_API_KEY$3 = '.data-api';
var ESCAPE_KEY$2 = 'Escape';
var TAB_KEY$1 = 'Tab';
var ARROW_UP_KEY$1 = 'ArrowUp';
var ARROW_DOWN_KEY$1 = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$6);
var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$6);
var EVENT_SHOW$5 = "show".concat(EVENT_KEY$6);
var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$6);
var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_DROPUP_CENTER = 'dropup-center';
var CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
var SELECTOR_DATA_TOGGLE_SHOWN = "".concat(SELECTOR_DATA_TOGGLE$3, ".").concat(CLASS_NAME_SHOW$6);
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR = '.navbar';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
var PLACEMENT_TOPCENTER = 'top';
var PLACEMENT_BOTTOMCENTER = 'bottom';
var Default$9 = {
  autoClose: true,
  boundary: 'clippingParents',
  display: 'dynamic',
  offset: [0, 2],
  popperConfig: null,
  reference: 'toggle'
};
var DefaultType$9 = {
  autoClose: '(boolean|string)',
  boundary: '(string|element)',
  display: 'string',
  offset: '(array|string|function)',
  popperConfig: '(null|object|function)',
  reference: '(string|element|object)'
};

/**
 * Class definition
 */
var Dropdown = /*#__PURE__*/function (_BaseComponent5) {
  function Dropdown(element, config) {
    var _this15;
    _classCallCheck(this, Dropdown);
    _this15 = _callSuper(this, Dropdown, [element, config]);
    _this15._popper = null;
    _this15._parent = _this15._element.parentNode; // dropdown wrapper
    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
    _this15._menu = SelectorEngine.next(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.prev(_this15._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, _this15._parent);
    _this15._inNavbar = _this15._detectNavbar();
    return _this15;
  }

  // Getters
  _inherits(Dropdown, _BaseComponent5);
  return _createClass(Dropdown, [{
    key: "toggle",
    value:
    // Public
    function toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        var _ref12;
        var _iterator12 = _createForOfIteratorHelper((_ref12 = []).concat.apply(_ref12, _toConsumableArray(document.body.children))),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var element = _step12.value;
            EventHandler.on(element, 'mouseover', noop);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
      this._element.focus();
      this._element.setAttribute('aria-expanded', true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      var relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      _superPropGet(Dropdown, "dispose", this, 3)([]);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }

    // Private
  }, {
    key: "_completeHide",
    value: function _completeHide(relatedTarget) {
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        var _ref13;
        var _iterator13 = _createForOfIteratorHelper((_ref13 = []).concat.apply(_ref13, _toConsumableArray(document.body.children))),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var element = _step13.value;
            EventHandler.off(element, 'mouseover', noop);
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute('aria-expanded', 'false');
      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _superPropGet(Dropdown, "_getConfig", this, 3)([config]);
      if (_typeof(config.reference) === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError("".concat(NAME$a.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
      }
      return config;
    }
  }, {
    key: "_createPopper",
    value: function _createPopper() {
      if (typeof !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }
      var referenceElement = this._element;
      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (_typeof(this._config.reference) === 'object') {
        referenceElement = this._config.reference;
      }
      var popperConfig = this._getPopperConfig();
      this._popper = !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(referenceElement, this._menu, popperConfig);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }

      // We need to trim the value because custom properties can also include spaces
      var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this16 = this;
      var offset = this._config.offset;
      if (typeof offset === 'string') {
        return offset.split(',').map(function (value) {
          return Number.parseInt(value, 10);
        });
      }
      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this16._element);
        };
      }
      return offset;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      };

      // Disable Popper if we have a static display or Dropdown is in Navbar
      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }
      return _objectSpread(_objectSpread({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(_ref14) {
      var key = _ref14.key,
        target = _ref14.target;
      var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(function (element) {
        return isVisible(element);
      });
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config]();
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
        return;
      }
      var openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      var _iterator14 = _createForOfIteratorHelper(openToggles),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var toggle = _step14.value;
          var context = Dropdown.getInstance(toggle);
          if (!context || context._config.autoClose === false) {
            continue;
          }
          var composedPath = event.composedPath();
          var isMenuTarget = composedPath.includes(context._menu);
          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          }

          // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }
          var relatedTarget = {
            relatedTarget: context._element
          };
          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
          context._completeHide(relatedTarget);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command

      var isInput = /input|textarea/i.test(event.target.tagName);
      var isEscapeEvent = event.key === ESCAPE_KEY$2;
      var isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();

      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      var instance = Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});

/**
 * jQuery
 */

defineJQueryPlugin(Dropdown);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$9 = 'backdrop';
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$9);
var Default$8 = {
  className: 'modal-backdrop',
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: 'body' // give the choice to place backdrop under different elements
};
var DefaultType$8 = {
  className: 'string',
  clickCallback: '(function|null)',
  isAnimated: 'boolean',
  isVisible: 'boolean',
  rootElement: '(element|string)'
};

/**
 * Class definition
 */
var Backdrop = /*#__PURE__*/function (_Config3) {
  function Backdrop(config) {
    var _this17;
    _classCallCheck(this, Backdrop);
    _this17 = _callSuper(this, Backdrop);
    _this17._config = _this17._getConfig(config);
    _this17._isAppended = false;
    _this17._element = null;
    return _this17;
  }

  // Getters
  _inherits(Backdrop, _Config3);
  return _createClass(Backdrop, [{
    key: "show",
    value:
    // Public
    function show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      var element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(function () {
        execute(callback);
      });
    }
  }, {
    key: "hide",
    value: function hide(callback) {
      var _this18 = this;
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(function () {
        _this18.dispose();
        execute(callback);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this19 = this;
      if (this._isAppended) {
        return;
      }
      var element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, function () {
        execute(_this19._config.clickCallback);
      });
      this._isAppended = true;
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }]);
}(Config);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */
var NAME$8 = 'focustrap';
var DATA_KEY$5 = 'bs.focustrap';
var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
var EVENT_FOCUSIN$2 = "focusin".concat(EVENT_KEY$5);
var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$5);
var TAB_KEY = 'Tab';
var TAB_NAV_FORWARD = 'forward';
var TAB_NAV_BACKWARD = 'backward';
var Default$7 = {
  autofocus: true,
  trapElement: null // The element to trap focus inside of
};
var DefaultType$7 = {
  autofocus: 'boolean',
  trapElement: 'element'
};

/**
 * Class definition
 */
var FocusTrap = /*#__PURE__*/function (_Config4) {
  function FocusTrap(config) {
    var _this20;
    _classCallCheck(this, FocusTrap);
    _this20 = _callSuper(this, FocusTrap);
    _this20._config = _this20._getConfig(config);
    _this20._isActive = false;
    _this20._lastTabNavDirection = null;
    return _this20;
  }

  // Getters
  _inherits(FocusTrap, _Config4);
  return _createClass(FocusTrap, [{
    key: "activate",
    value:
    // Public
    function activate() {
      var _this21 = this;
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$2, function (event) {
        return _this21._handleFocusin(event);
      });
      EventHandler.on(document, EVENT_KEYDOWN_TAB, function (event) {
        return _this21._handleKeydown(event);
      });
      this._isActive = true;
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }

    // Private
  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(event) {
      var trapElement = this._config.trapElement;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      var elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$7;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$7;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$8;
    }
  }]);
}(Config);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */
var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
var PROPERTY_PADDING = 'padding-right';
var PROPERTY_MARGIN = 'margin-right';

/**
 * Class definition
 */
var ScrollBarHelper = /*#__PURE__*/function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);
    this._element = document.body;
  }

  // Public
  return _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      var documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
  }, {
    key: "hide",
    value: function hide() {
      var width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, function (calculatedValue) {
        return calculatedValue + width;
      });
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, function (calculatedValue) {
        return calculatedValue + width;
      });
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, function (calculatedValue) {
        return calculatedValue - width;
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
  }, {
    key: "_disableOverFlow",
    value: function _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(selector, styleProperty, callback) {
      var _this22 = this;
      var scrollbarWidth = this.getWidth();
      var manipulationCallBack = function manipulationCallBack(element) {
        if (element !== _this22._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        _this22._saveInitialAttribute(element, styleProperty);
        var calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, "".concat(callback(Number.parseFloat(calculatedValue)), "px"));
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(element, styleProperty) {
      var actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(selector, styleProperty) {
      var manipulationCallBack = function manipulationCallBack(element) {
        var value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      var _iterator15 = _createForOfIteratorHelper(SelectorEngine.find(selector, this._element)),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var sel = _step15.value;
          callBack(sel);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }]);
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */
var NAME$7 = 'modal';
var DATA_KEY$4 = 'bs.modal';
var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
var DATA_API_KEY$2 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$4);
var EVENT_HIDE_PREVENTED$1 = "hidePrevented".concat(EVENT_KEY$4);
var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$4);
var EVENT_SHOW$4 = "show".concat(EVENT_KEY$4);
var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$4);
var EVENT_RESIZE$1 = "resize".concat(EVENT_KEY$4);
var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$4);
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$4);
var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$4);
var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$4).concat(DATA_API_KEY$2);
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var OPEN_SELECTOR$1 = '.modal.show';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
var Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
var DefaultType$6 = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
  keyboard: 'boolean'
};

/**
 * Class definition
 */
var Modal = /*#__PURE__*/function (_BaseComponent6) {
  function Modal(element, config) {
    var _this23;
    _classCallCheck(this, Modal);
    _this23 = _callSuper(this, Modal, [element, config]);
    _this23._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this23._element);
    _this23._backdrop = _this23._initializeBackDrop();
    _this23._focustrap = _this23._initializeFocusTrap();
    _this23._isShown = false;
    _this23._isTransitioning = false;
    _this23._scrollBar = new ScrollBarHelper();
    _this23._addEventListeners();
    return _this23;
  }

  // Getters
  _inherits(Modal, _BaseComponent6);
  return _createClass(Modal, [{
    key: "toggle",
    value:
    // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this24 = this;
      if (this._isShown || this._isTransitioning) {
        return;
      }
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget: relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(function () {
        return _this24._showElement(relatedTarget);
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this25 = this;
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(function () {
        return _this25._hideModal();
      }, this._element, this._isAnimated());
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      _superPropGet(Modal, "dispose", this, 3)([]);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    }

    // Private
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_showElement",
    value: function _showElement(relatedTarget) {
      var _this26 = this;
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      var transitionComplete = function transitionComplete() {
        if (_this26._config.focus) {
          _this26._focustrap.activate();
        }
        _this26._isTransitioning = false;
        EventHandler.trigger(_this26._element, EVENT_SHOWN$4, {
          relatedTarget: relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this27 = this;
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (event) {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (_this27._config.keyboard) {
          _this27.hide();
          return;
        }
        _this27._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, function () {
        if (_this27._isShown && !_this27._isTransitioning) {
          _this27._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, function (event) {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(_this27._element, EVENT_CLICK_DISMISS, function (event2) {
          if (_this27._element !== event.target || _this27._element !== event2.target) {
            return;
          }
          if (_this27._config.backdrop === 'static') {
            _this27._triggerBackdropTransition();
            return;
          }
          if (_this27._config.backdrop) {
            _this27.hide();
          }
        });
      });
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this28 = this;
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(function () {
        document.body.classList.remove(CLASS_NAME_OPEN);
        _this28._resetAdjustments();
        _this28._scrollBar.reset();
        EventHandler.trigger(_this28._element, EVENT_HIDDEN$4);
      });
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this29 = this;
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      var initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(function () {
        _this29._element.classList.remove(CLASS_NAME_STATIC);
        _this29._queueCallback(function () {
          _this29._element.style.overflowY = initialOverflowY;
        }, _this29._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */
  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      var scrollbarWidth = this._scrollBar.getWidth();
      var isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        var property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = "".concat(scrollbarWidth, "px");
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        var _property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[_property] = "".concat(scrollbarWidth, "px");
      }
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$6;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$6;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$7;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config](relatedTarget);
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  var _this30 = this;
  var target = SelectorEngine.getElementFromSelector(this);
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, function () {
      if (isVisible(_this30)) {
        _this30.focus();
      }
    });
  });

  // avoid conflict when clicking modal toggler while another one is open
  var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  var data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);

/**
 * jQuery
 */

defineJQueryPlugin(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$6 = 'offcanvas';
var DATA_KEY$3 = 'bs.offcanvas';
var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
var DATA_API_KEY$1 = '.data-api';
var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$3).concat(DATA_API_KEY$1);
var ESCAPE_KEY = 'Escape';
var CLASS_NAME_SHOW$3 = 'show';
var CLASS_NAME_SHOWING$1 = 'showing';
var CLASS_NAME_HIDING = 'hiding';
var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
var OPEN_SELECTOR = '.offcanvas.show';
var EVENT_SHOW$3 = "show".concat(EVENT_KEY$3);
var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$3);
var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$3);
var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$3);
var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$3);
var EVENT_RESIZE = "resize".concat(EVENT_KEY$3);
var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$3).concat(DATA_API_KEY$1);
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$3);
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  scroll: 'boolean'
};

/**
 * Class definition
 */
var Offcanvas = /*#__PURE__*/function (_BaseComponent7) {
  function Offcanvas(element, config) {
    var _this31;
    _classCallCheck(this, Offcanvas);
    _this31 = _callSuper(this, Offcanvas, [element, config]);
    _this31._isShown = false;
    _this31._backdrop = _this31._initializeBackDrop();
    _this31._focustrap = _this31._initializeFocusTrap();
    _this31._addEventListeners();
    return _this31;
  }

  // Getters
  _inherits(Offcanvas, _BaseComponent7);
  return _createClass(Offcanvas, [{
    key: "toggle",
    value:
    // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this32 = this;
      if (this._isShown) {
        return;
      }
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      var completeCallBack = function completeCallBack() {
        if (!_this32._config.scroll || _this32._config.backdrop) {
          _this32._focustrap.activate();
        }
        _this32._element.classList.add(CLASS_NAME_SHOW$3);
        _this32._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(_this32._element, EVENT_SHOWN$3, {
          relatedTarget: relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this33 = this;
      if (!this._isShown) {
        return;
      }
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      var completeCallback = function completeCallback() {
        _this33._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        _this33._element.removeAttribute('aria-modal');
        _this33._element.removeAttribute('role');
        if (!_this33._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(_this33._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      _superPropGet(Offcanvas, "dispose", this, 3)([]);
    }

    // Private
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this34 = this;
      var clickCallback = function clickCallback() {
        if (_this34._config.backdrop === 'static') {
          EventHandler.trigger(_this34._element, EVENT_HIDE_PREVENTED);
          return;
        }
        _this34.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      var isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this35 = this;
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (_this35._config.keyboard) {
          _this35.hide();
          return;
        }
        EventHandler.trigger(_this35._element, EVENT_HIDE_PREVENTED);
      });
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config](this);
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  var _this36 = this;
  var target = SelectorEngine.getElementFromSelector(this);
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, function () {
    // focus on trigger when it is closed
    if (isVisible(_this36)) {
      _this36.focus();
    }
  });

  // avoid conflict when clicking a toggler of an offcanvas, while another is open
  var alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  var data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var _iterator16 = _createForOfIteratorHelper(SelectorEngine.find(OPEN_SELECTOR)),
    _step16;
  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var selector = _step16.value;
      Offcanvas.getOrCreateInstance(selector).show();
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
});
EventHandler.on(window, EVENT_RESIZE, function () {
  var _iterator17 = _createForOfIteratorHelper(SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')),
    _step17;
  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var element = _step17.value;
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
});
enableDismissTrigger(Offcanvas);

/**
 * jQuery
 */

defineJQueryPlugin(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// js-docs-start allow-list
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
// js-docs-end allow-list

var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
 * contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */
// eslint-disable-next-line unicorn/better-regex
var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
  var attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }

  // Check if a regular expression validates the attribute.
  return allowedAttributeList.filter(function (attributeRegex) {
    return attributeRegex instanceof RegExp;
  }).some(function (regex) {
    return regex.test(attributeName);
  });
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  var _ref15;
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml);
  }
  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  var elements = (_ref15 = []).concat.apply(_ref15, _toConsumableArray(createdDocument.body.querySelectorAll('*')));
  var _iterator18 = _createForOfIteratorHelper(elements),
    _step18;
  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      var _ref16;
      var element = _step18.value;
      var elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      var attributeList = (_ref16 = []).concat.apply(_ref16, _toConsumableArray(element.attributes));
      var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
      var _iterator19 = _createForOfIteratorHelper(attributeList),
        _step19;
      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var attribute = _step19.value;
          if (!allowedAttribute(attribute, allowedAttributes)) {
            element.removeAttribute(attribute.nodeName);
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
  return createdDocument.body.innerHTML;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$5 = 'TemplateFactory';
var Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: '',
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: '<div></div>'
};
var DefaultType$4 = {
  allowList: 'object',
  content: 'object',
  extraClass: '(string|function)',
  html: 'boolean',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  template: 'string'
};
var DefaultContentType = {
  entry: '(string|element|function|null)',
  selector: '(string|element)'
};

/**
 * Class definition
 */
var TemplateFactory = /*#__PURE__*/function (_Config5) {
  function TemplateFactory(config) {
    var _this37;
    _classCallCheck(this, TemplateFactory);
    _this37 = _callSuper(this, TemplateFactory);
    _this37._config = _this37._getConfig(config);
    return _this37;
  }

  // Getters
  _inherits(TemplateFactory, _Config5);
  return _createClass(TemplateFactory, [{
    key: "getContent",
    value:
    // Public
    function getContent() {
      var _this38 = this;
      return Object.values(this._config.content).map(function (config) {
        return _this38._resolvePossibleFunction(config);
      }).filter(Boolean);
    }
  }, {
    key: "hasContent",
    value: function hasContent() {
      return this.getContent().length > 0;
    }
  }, {
    key: "changeContent",
    value: function changeContent(content) {
      this._checkContent(content);
      this._config.content = _objectSpread(_objectSpread({}, this._config.content), content);
      return this;
    }
  }, {
    key: "toHtml",
    value: function toHtml() {
      var templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (var _i7 = 0, _Object$entries5 = Object.entries(this._config.content); _i7 < _Object$entries5.length; _i7++) {
        var _ref17 = _Object$entries5[_i7];
        var _ref18 = _slicedToArray(_ref17, 2);
        var selector = _ref18[0];
        var text = _ref18[1];
        this._setContent(templateWrapper, text, selector);
      }
      var template = templateWrapper.children[0];
      var extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        var _template$classList;
        (_template$classList = template.classList).add.apply(_template$classList, _toConsumableArray(extraClass.split(' ')));
      }
      return template;
    }

    // Private
  }, {
    key: "_typeCheckConfig",
    value: function _typeCheckConfig(config) {
      _superPropGet(TemplateFactory, "_typeCheckConfig", this, 3)([config]);
      this._checkContent(config.content);
    }
  }, {
    key: "_checkContent",
    value: function _checkContent(arg) {
      for (var _i8 = 0, _Object$entries6 = Object.entries(arg); _i8 < _Object$entries6.length; _i8++) {
        var _ref19 = _Object$entries6[_i8];
        var _ref20 = _slicedToArray(_ref19, 2);
        var selector = _ref20[0];
        var content = _ref20[1];
        _superPropGet(TemplateFactory, "_typeCheckConfig", this, 3)([{
          selector: selector,
          entry: content
        }, DefaultContentType]);
      }
    }
  }, {
    key: "_setContent",
    value: function _setContent(template, content, selector) {
      var templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
  }, {
    key: "_maybeSanitize",
    value: function _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
  }, {
    key: "_putElementInTemplate",
    value: function _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$4;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }]);
}(Config);
/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */
var NAME$4 = 'tooltip';
var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$2 = 'show';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
var EVENT_MODAL_HIDE = 'hide.bs.modal';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
var EVENT_HIDE$2 = 'hide';
var EVENT_HIDDEN$2 = 'hidden';
var EVENT_SHOW$2 = 'show';
var EVENT_SHOWN$2 = 'shown';
var EVENT_INSERTED = 'inserted';
var EVENT_CLICK$1 = 'click';
var EVENT_FOCUSIN$1 = 'focusin';
var EVENT_FOCUSOUT$1 = 'focusout';
var EVENT_MOUSEENTER = 'mouseenter';
var EVENT_MOUSELEAVE = 'mouseleave';
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
var Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: 'clippingParents',
  container: false,
  customClass: '',
  delay: 0,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  html: false,
  offset: [0, 6],
  placement: 'top',
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  title: '',
  trigger: 'hover focus'
};
var DefaultType$3 = {
  allowList: 'object',
  animation: 'boolean',
  boundary: '(string|element)',
  container: '(string|element|boolean)',
  customClass: '(string|function)',
  delay: '(number|object)',
  fallbackPlacements: 'array',
  html: 'boolean',
  offset: '(array|string|function)',
  placement: '(string|function)',
  popperConfig: '(null|object|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  selector: '(string|boolean)',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string'
};

/**
 * Class definition
 */
var Tooltip = /*#__PURE__*/function (_BaseComponent8) {
  function Tooltip(element, config) {
    var _this39;
    _classCallCheck(this, Tooltip);
    if (typeof !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }
    _this39 = _callSuper(this, Tooltip, [element, config]);

    // Private
    _this39._isEnabled = true;
    _this39._timeout = 0;
    _this39._isHovered = null;
    _this39._activeTrigger = {};
    _this39._popper = null;
    _this39._templateFactory = null;
    _this39._newContent = null;

    // Protected
    _this39.tip = null;
    _this39._setListeners();
    if (!_this39._config.selector) {
      _this39._fixTitle();
    }
    return _this39;
  }

  // Getters
  _inherits(Tooltip, _BaseComponent8);
  return _createClass(Tooltip, [{
    key: "enable",
    value:
    // Public
    function enable() {
      this._isEnabled = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = false;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute('data-bs-original-title')) {
        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
      }
      this._disposePopper();
      _superPropGet(Tooltip, "dispose", this, 3)([]);
    }
  }, {
    key: "show",
    value: function show() {
      var _this40 = this;
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      var showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      var shadowRoot = _findShadowRoot(this._element);
      var isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      // TODO: v6 remove this or make it optional
      this._disposePopper();
      var tip = this._getTipElement();
      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
      var container = this._config.container;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        var _ref21;
        var _iterator20 = _createForOfIteratorHelper((_ref21 = []).concat.apply(_ref21, _toConsumableArray(document.body.children))),
          _step20;
        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var element = _step20.value;
            EventHandler.on(element, 'mouseover', noop);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
      }
      var complete = function complete() {
        EventHandler.trigger(_this40._element, _this40.constructor.eventName(EVENT_SHOWN$2));
        if (_this40._isHovered === false) {
          _this40._leave();
        }
        _this40._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this41 = this;
      if (!this._isShown()) {
        return;
      }
      var hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      var tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        var _ref22;
        var _iterator21 = _createForOfIteratorHelper((_ref22 = []).concat.apply(_ref22, _toConsumableArray(document.body.children))),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var element = _step21.value;
            EventHandler.off(element, 'mouseover', noop);
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null; // it is a trick to support manual triggering

      var complete = function complete() {
        if (_this41._isWithActiveTrigger()) {
          return;
        }
        if (!_this41._isHovered) {
          _this41._disposePopper();
        }
        _this41._element.removeAttribute('aria-describedby');
        EventHandler.trigger(_this41._element, _this41.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
  }, {
    key: "update",
    value: function update() {
      if (this._popper) {
        this._popper.update();
      }
    }

    // Protected
  }, {
    key: "_isWithContent",
    value: function _isWithContent() {
      return Boolean(this._getTitle());
    }
  }, {
    key: "_getTipElement",
    value: function _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
  }, {
    key: "_createTipElement",
    value: function _createTipElement(content) {
      var tip = this._getTemplateFactory(content).toHtml();

      // TODO: remove this check in v6
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      // TODO: v6 the following can be achieved with CSS only
      tip.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
      var tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
  }, {
    key: "_getTemplateFactory",
    value: function _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory(_objectSpread(_objectSpread({}, this._config), {}, {
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content: content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }));
      }
      return this._templateFactory;
    }
  }, {
    key: "_getContentForTemplate",
    value: function _getContentForTemplate() {
      return _defineProperty({}, SELECTOR_TOOLTIP_INNER, this._getTitle());
    }
  }, {
    key: "_getTitle",
    value: function _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
    }

    // Private
  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
  }, {
    key: "_isShown",
    value: function _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
  }, {
    key: "_createPopper",
    value: function _createPopper(tip) {
      var placement = execute(this._config.placement, [this, tip, this._element]);
      var attachment = AttachmentMap[placement.toUpperCase()];
      return !(function webpackMissingModule() { var e = new Error("Cannot find module '@popperjs/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this._element, tip, this._getPopperConfig(attachment));
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this42 = this;
      var offset = this._config.offset;
      if (typeof offset === 'string') {
        return offset.split(',').map(function (value) {
          return Number.parseInt(value, 10);
        });
      }
      if (typeof offset === 'function') {
        return function (popperData) {
          return offset(popperData, _this42._element);
        };
      }
      return offset;
    }
  }, {
    key: "_resolvePossibleFunction",
    value: function _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(attachment) {
      var _this43 = this;
      var defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: function fn(data) {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            _this43._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
      };
      return _objectSpread(_objectSpread({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this44 = this;
      var triggers = this._config.trigger.split(' ');
      var _iterator22 = _createForOfIteratorHelper(triggers),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var trigger = _step22.value;
          if (trigger === 'click') {
            EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, function (event) {
              var context = _this44._initializeOnDelegatedTarget(event);
              context.toggle();
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
            var eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
            EventHandler.on(this._element, eventIn, this._config.selector, function (event) {
              var context = _this44._initializeOnDelegatedTarget(event);
              context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
              context._enter();
            });
            EventHandler.on(this._element, eventOut, this._config.selector, function (event) {
              var context = _this44._initializeOnDelegatedTarget(event);
              context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
              context._leave();
            });
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      this._hideModalHandler = function () {
        if (_this44._element) {
          _this44.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var title = this._element.getAttribute('title');
      if (!title) {
        return;
      }
      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }
      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
      this._element.removeAttribute('title');
    }
  }, {
    key: "_enter",
    value: function _enter() {
      var _this45 = this;
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(function () {
        if (_this45._isHovered) {
          _this45.show();
        }
      }, this._config.delay.show);
    }
  }, {
    key: "_leave",
    value: function _leave() {
      var _this46 = this;
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(function () {
        if (!_this46._isHovered) {
          _this46.hide();
        }
      }, this._config.delay.hide);
    }
  }, {
    key: "_setTimeout",
    value: function _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      var dataAttributes = Manipulator.getDataAttributes(this._element);
      for (var _i9 = 0, _Object$keys2 = Object.keys(dataAttributes); _i9 < _Object$keys2.length; _i9++) {
        var dataAttribute = _Object$keys2[_i9];
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = _objectSpread(_objectSpread({}, dataAttributes), _typeof(config) === 'object' && config ? config : {});
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }
      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }
      return config;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var config = {};
      for (var _i10 = 0, _Object$entries7 = Object.entries(this._config); _i10 < _Object$entries7.length; _i10++) {
        var _ref24 = _Object$entries7[_i10];
        var _ref25 = _slicedToArray(_ref24, 2);
        var key = _ref25[0];
        var value = _ref25[1];
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = 'manual';

      // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`
      return config;
    }
  }, {
    key: "_disposePopper",
    value: function _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config]();
      });
    }
  }]);
}(BaseComponent);
/**
 * jQuery
 */
defineJQueryPlugin(Tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$3 = 'popover';
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
var Default$2 = _objectSpread(_objectSpread({}, Tooltip.Default), {}, {
  content: '',
  offset: [0, 8],
  placement: 'right',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
  trigger: 'click'
});
var DefaultType$2 = _objectSpread(_objectSpread({}, Tooltip.DefaultType), {}, {
  content: '(null|string|element|function)'
});

/**
 * Class definition
 */
var Popover = /*#__PURE__*/function (_Tooltip) {
  function Popover() {
    _classCallCheck(this, Popover);
    return _callSuper(this, Popover, arguments);
  }
  _inherits(Popover, _Tooltip);
  return _createClass(Popover, [{
    key: "_isWithContent",
    value:
    // Overrides
    function _isWithContent() {
      return this._getTitle() || this._getContent();
    }

    // Private
  }, {
    key: "_getContentForTemplate",
    value: function _getContentForTemplate() {
      return _defineProperty(_defineProperty({}, SELECTOR_TITLE, this._getTitle()), SELECTOR_CONTENT, this._getContent());
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    // Static
  }], [{
    key: "Default",
    get:
    // Getters
    function get() {
      return Default$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Popover.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config]();
      });
    }
  }]);
}(Tooltip);
/**
 * jQuery
 */
defineJQueryPlugin(Popover);

/**
 * --------------------------------------------------------------------------
 * Bootstrap scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$2 = 'scrollspy';
var DATA_KEY$2 = 'bs.scrollspy';
var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
var DATA_API_KEY = '.data-api';
var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
var EVENT_CLICK = "click".concat(EVENT_KEY$2);
var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY);
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$1 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_TARGET_LINKS = '[href]';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_NAV_ITEMS, " > ").concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS);
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: '0px 0px -25%',
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
var DefaultType$1 = {
  offset: '(number|null)',
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: 'string',
  smoothScroll: 'boolean',
  target: 'element',
  threshold: 'array'
};

/**
 * Class definition
 */
var ScrollSpy = /*#__PURE__*/function (_BaseComponent9) {
  function ScrollSpy(element, config) {
    var _this47;
    _classCallCheck(this, ScrollSpy);
    _this47 = _callSuper(this, ScrollSpy, [element, config]);

    // this._element is the observablesContainer and config.target the menu links wrapper
    _this47._targetLinks = new Map();
    _this47._observableSections = new Map();
    _this47._rootElement = getComputedStyle(_this47._element).overflowY === 'visible' ? null : _this47._element;
    _this47._activeTarget = null;
    _this47._observer = null;
    _this47._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    _this47.refresh(); // initialize
    return _this47;
  }

  // Getters
  _inherits(ScrollSpy, _BaseComponent9);
  return _createClass(ScrollSpy, [{
    key: "refresh",
    value:
    // Public
    function refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      var _iterator23 = _createForOfIteratorHelper(this._observableSections.values()),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var section = _step23.value;
          this._observer.observe(section);
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._observer.disconnect();
      _superPropGet(ScrollSpy, "dispose", this, 3)([]);
    }

    // Private
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = getElement(config.target) || document.body;

      // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
      config.rootMargin = config.offset ? "".concat(config.offset, "px 0px -30%") : config.rootMargin;
      if (typeof config.threshold === 'string') {
        config.threshold = config.threshold.split(',').map(function (value) {
          return Number.parseFloat(value);
        });
      }
      return config;
    }
  }, {
    key: "_maybeEnableSmoothScroll",
    value: function _maybeEnableSmoothScroll() {
      var _this48 = this;
      if (!this._config.smoothScroll) {
        return;
      }

      // unregister any previous listeners
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, function (event) {
        var observableSection = _this48._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          var root = _this48._rootElement || window;
          var height = observableSection.offsetTop - _this48._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          }

          // Chrome 60 doesn't support `scrollTo`
          root.scrollTop = height;
        }
      });
    }
  }, {
    key: "_getNewObserver",
    value: function _getNewObserver() {
      var _this49 = this;
      var options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(function (entries) {
        return _this49._observerCallback(entries);
      }, options);
    }

    // The logic of selection
  }, {
    key: "_observerCallback",
    value: function _observerCallback(entries) {
      var _this50 = this;
      var targetElement = function targetElement(entry) {
        return _this50._targetLinks.get("#".concat(entry.target.id));
      };
      var activate = function activate(entry) {
        _this50._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        _this50._process(targetElement(entry));
      };
      var parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      var userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      var _iterator24 = _createForOfIteratorHelper(entries),
        _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var entry = _step24.value;
          if (!entry.isIntersecting) {
            this._activeTarget = null;
            this._clearActiveClass(targetElement(entry));
            continue;
          }
          var entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          // if we are scrolling down, pick the bigger offsetTop
          if (userScrollsDown && entryIsLowerThanPrevious) {
            activate(entry);
            // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
            if (!parentScrollTop) {
              return;
            }
            continue;
          }

          // if we are scrolling up, pick the smallest offsetTop
          if (!userScrollsDown && !entryIsLowerThanPrevious) {
            activate(entry);
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
  }, {
    key: "_initializeTargetsAndObservables",
    value: function _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      var targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      var _iterator25 = _createForOfIteratorHelper(targetLinks),
        _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var anchor = _step25.value;
          // ensure that the anchor has an id and is not disabled
          if (!anchor.hash || isDisabled(anchor)) {
            continue;
          }
          var observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

          // ensure that the observableSection exists & is visible
          if (isVisible(observableSection)) {
            this._targetLinks.set(decodeURI(anchor.hash), anchor);
            this._observableSections.set(anchor.hash, observableSection);
          }
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
    }
  }, {
    key: "_process",
    value: function _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
  }, {
    key: "_activateParents",
    value: function _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      var _iterator26 = _createForOfIteratorHelper(SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)),
        _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var listGroup = _step26.value;
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          var _iterator27 = _createForOfIteratorHelper(SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)),
            _step27;
          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var item = _step27.value;
              item.classList.add(CLASS_NAME_ACTIVE$1);
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
    }
  }, {
    key: "_clearActiveClass",
    value: function _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      var activeNodes = SelectorEngine.find("".concat(SELECTOR_TARGET_LINKS, ".").concat(CLASS_NAME_ACTIVE$1), parent);
      var _iterator28 = _createForOfIteratorHelper(activeNodes),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var node = _step28.value;
          node.classList.remove(CLASS_NAME_ACTIVE$1);
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config]();
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  var _iterator29 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_DATA_SPY)),
    _step29;
  try {
    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
      var spy = _step29.value;
      ScrollSpy.getOrCreateInstance(spy);
    }
  } catch (err) {
    _iterator29.e(err);
  } finally {
    _iterator29.f();
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(ScrollSpy);

/**
 * --------------------------------------------------------------------------
 * Bootstrap tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME$1 = 'tab';
var DATA_KEY$1 = 'bs.tab';
var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1);
var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$1);
var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$1);
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var HOME_KEY = 'Home';
var END_KEY = 'End';
var CLASS_NAME_ACTIVE = 'active';
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_SHOW$1 = 'show';
var CLASS_DROPDOWN = 'dropdown';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
var NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(".concat(SELECTOR_DROPDOWN_TOGGLE, ")");
var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
var SELECTOR_OUTER = '.nav-item, .list-group-item';
var SELECTOR_INNER = ".nav-link".concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", .list-group-item").concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", [role=\"tab\"]").concat(NOT_SELECTOR_DROPDOWN_TOGGLE);
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
var SELECTOR_INNER_ELEM = "".concat(SELECTOR_INNER, ", ").concat(SELECTOR_DATA_TOGGLE);
var SELECTOR_DATA_TOGGLE_ACTIVE = ".".concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"tab\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"pill\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"list\"]");

/**
 * Class definition
 */
var Tab = /*#__PURE__*/function (_BaseComponent10) {
  function Tab(element) {
    var _this51;
    _classCallCheck(this, Tab);
    _this51 = _callSuper(this, Tab, [element]);
    _this51._parent = _this51._element.closest(SELECTOR_TAB_PANEL);
    if (!_this51._parent) {
      return _possibleConstructorReturn(_this51);
      // TODO: should throw exception in v6
      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
    }

    // Set up initial aria attributes
    _this51._setInitialAttributes(_this51._parent, _this51._getChildren());
    EventHandler.on(_this51._element, EVENT_KEYDOWN, function (event) {
      return _this51._keydown(event);
    });
    return _this51;
  }

  // Getters
  _inherits(Tab, _BaseComponent10);
  return _createClass(Tab, [{
    key: "show",
    value:
    // Public
    function show() {
      // Shows this elem and deactivate the active sibling if exists
      var innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }

      // Search for active tab on same parent to deactivate it
      var active = this._getActiveElem();
      var hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      var showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }

    // Private
  }, {
    key: "_activate",
    value: function _activate(element, relatedElem) {
      var _this52 = this;
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

      var complete = function complete() {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);
        _this52._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
  }, {
    key: "_deactivate",
    value: function _deactivate(element, relatedElem) {
      var _this53 = this;
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

      var complete = function complete() {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');
        _this53._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
  }, {
    key: "_keydown",
    value: function _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
      event.preventDefault();
      var children = this._getChildren().filter(function (element) {
        return !isDisabled(element);
      });
      var nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        var isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
  }, {
    key: "_getChildren",
    value: function _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
  }, {
    key: "_getActiveElem",
    value: function _getActiveElem() {
      var _this54 = this;
      return this._getChildren().find(function (child) {
        return _this54._elemIsActive(child);
      }) || null;
    }
  }, {
    key: "_setInitialAttributes",
    value: function _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');
      var _iterator30 = _createForOfIteratorHelper(children),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var child = _step30.value;
          this._setInitialAttributesOnChild(child);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }
  }, {
    key: "_setInitialAttributesOnChild",
    value: function _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      var isActive = this._elemIsActive(child);
      var outerElem = this._getOuterElement(child);
      child.setAttribute('aria-selected', isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }
      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }
      this._setAttributeIfNotExists(child, 'role', 'tab');

      // set attributes to the related panel too
      this._setInitialAttributesOnTargetPanel(child);
    }
  }, {
    key: "_setInitialAttributesOnTargetPanel",
    value: function _setInitialAttributesOnTargetPanel(child) {
      var target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, 'role', 'tabpanel');
      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', "".concat(child.id));
      }
    }
  }, {
    key: "_toggleDropDown",
    value: function _toggleDropDown(element, open) {
      var outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      var toggle = function toggle(selector, className) {
        var element = SelectorEngine.findOne(selector, outerElem);
        if (element) {
          element.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute('aria-expanded', open);
    }
  }, {
    key: "_setAttributeIfNotExists",
    value: function _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
  }, {
    key: "_elemIsActive",
    value: function _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }

    // Try to get the inner element (usually the .nav-link)
  }, {
    key: "_getInnerElement",
    value: function _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }

    // Try to get the outer element (usually the .nav-item)
  }, {
    key: "_getOuterElement",
    value: function _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }

    // Static
  }], [{
    key: "NAME",
    get: function get() {
      return NAME$1;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Tab.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config]();
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});

/**
 * Initialize on focus
 */
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  var _iterator31 = _createForOfIteratorHelper(SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)),
    _step31;
  try {
    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
      var element = _step31.value;
      Tab.getOrCreateInstance(element);
    }
  } catch (err) {
    _iterator31.e(err);
  } finally {
    _iterator31.f();
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Tab);

/**
 * --------------------------------------------------------------------------
 * Bootstrap toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var NAME = 'toast';
var DATA_KEY = 'bs.toast';
var EVENT_KEY = ".".concat(DATA_KEY);
var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
var EVENT_HIDE = "hide".concat(EVENT_KEY);
var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
var EVENT_SHOW = "show".concat(EVENT_KEY);
var EVENT_SHOWN = "shown".concat(EVENT_KEY);
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5000
};

/**
 * Class definition
 */
var Toast = /*#__PURE__*/function (_BaseComponent11) {
  function Toast(element, config) {
    var _this55;
    _classCallCheck(this, Toast);
    _this55 = _callSuper(this, Toast, [element, config]);
    _this55._timeout = null;
    _this55._hasMouseInteraction = false;
    _this55._hasKeyboardInteraction = false;
    _this55._setListeners();
    return _this55;
  }

  // Getters
  _inherits(Toast, _BaseComponent11);
  return _createClass(Toast, [{
    key: "show",
    value:
    // Public
    function show() {
      var _this56 = this;
      var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      var complete = function complete() {
        _this56._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(_this56._element, EVENT_SHOWN);
        _this56._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this57 = this;
      if (!this.isShown()) {
        return;
      }
      var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      var complete = function complete() {
        _this57._element.classList.add(CLASS_NAME_HIDE); // @deprecated
        _this57._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(_this57._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      _superPropGet(Toast, "dispose", this, 3)([]);
    }
  }, {
    key: "isShown",
    value: function isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }

    // Private
  }, {
    key: "_maybeScheduleHide",
    value: function _maybeScheduleHide() {
      var _this58 = this;
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(function () {
        _this58.hide();
      }, this._config.delay);
    }
  }, {
    key: "_onInteraction",
    value: function _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          {
            this._hasMouseInteraction = isInteracting;
            break;
          }
        case 'focusin':
        case 'focusout':
          {
            this._hasKeyboardInteraction = isInteracting;
            break;
          }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      var nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this59 = this;
      EventHandler.on(this._element, EVENT_MOUSEOVER, function (event) {
        return _this59._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_MOUSEOUT, function (event) {
        return _this59._onInteraction(event, false);
      });
      EventHandler.on(this._element, EVENT_FOCUSIN, function (event) {
        return _this59._onInteraction(event, true);
      });
      EventHandler.on(this._element, EVENT_FOCUSOUT, function (event) {
        return _this59._onInteraction(event, false);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Toast.getOrCreateInstance(this, config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config](this);
        }
      });
    }
  }]);
}(BaseComponent);
/**
 * Data API implementation
 */
enableDismissTrigger(Toast);

/**
 * jQuery
 */

defineJQueryPlugin(Toast);


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-3095143c9360212337e0.js.map