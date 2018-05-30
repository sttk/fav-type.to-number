(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.type||(g.type = {}));g.toNumber = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');

function toNumber(value) {
  if (typeof value === 'number') {
    if (value === value) {
      return value;
    }

  } else if (isString(value)) {
    if (value && !/ /.test(value)) {
      value = Number(value);
      if (value === value) {
        return value;
      }
    }
  }

  if (arguments.length > 1) {
    return arguments[1];
  }
  return NaN;
}

module.exports = toNumber;

},{"@fav/type.is-string":2}],2:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

function isNotString(value) {
  return !isString(value);
}

Object.defineProperty(isString, 'not', {
  enumerable: true,
  value: isNotString,
});

module.exports = isString;

},{}]},{},[1])(1)
});
