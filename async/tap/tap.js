"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Create a side effect from the value of a promise. The tap function is only called if the promise is resolved.
 * @param fn {Function}
 * @param p {Promise<T>}
 * @returns {Promise<T>}
 */
function tap(fn, p) {
  p.then(fn);
  return p;
}

var _default = tap;
exports.default = _default;