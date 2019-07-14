"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Creates a function which negates the value of the result.
 * Works like the ! operator on the result of the function provided
 * @param fn {Function}
 * @returns {function(...[$ReadOnlyArray<*>]): boolean}
 */
function negate(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

var _default = negate;
exports.default = _default;