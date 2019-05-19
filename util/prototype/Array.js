"use strict";
exports.__esModule = true;
var Function_1 = require("../Function");
Array.prototype._empty = function () {
    return this.length === 0;
};
Array.prototype._equal = function (a) {
    return JSON.stringify(this) === JSON.stringify(a);
};
Array.prototype._count = function (n) {
    return this.filter(function (v) { return v == n; }).length;
};
Array.prototype._uniq = function () {
    var _this = this;
    var l = Array.from(new Set(this));
    this._clear();
    l.forEach(function (v, i) { return (_this[i] = v); });
    return this;
};
Array.prototype._overlap = function () {
    var _this = this;
    var l = this.filter(function (n, i, a) { return a.indexOf(n) === i && i !== a.lastIndexOf(n); });
    this._clear();
    l.forEach(function (v, i) { return (_this[i] = v); });
    return this;
};
Array.prototype._first = function (n) {
    var _this = this;
    if (n === void 0) { n = 1; }
    if (n === 1) {
        return this[0];
    }
    else {
        return Function_1.range(n).map(function (i) { return _this[i]; });
    }
};
Array.prototype._last = function (n) {
    if (n === void 0) { n = 1; }
    var a = this.concat();
    if (n === 1) {
        return a.pop();
    }
    return a
        .reverse()
        ._first(n)
        .reverse();
};
Array.prototype._clear = function () {
    this.length = 0;
    return this;
};
Array.prototype._remove = function () {
    var _this = this;
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    if (n.length === 1) {
        return this.splice(n[0], 1)._first();
    }
    else {
        return n.map(function (v) { return _this.splice(v, 1)._first(); });
    }
};
