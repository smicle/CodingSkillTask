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
    var a = Array.from(new Set(this));
    this._clear();
    a.forEach(function (v, i) { return (_this[i] = v); });
    return this;
};
Array.prototype._overlap = function () {
    var _this = this;
    var a = this.filter(function (v, i, a) { return a.indexOf(v) === i && i !== a.lastIndexOf(v); });
    this._clear();
    a.forEach(function (v, i) { return (_this[i] = v); });
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
    // prettier-ignore
    return a.reverse()._first(n).reverse();
};
Array.prototype._take = function (n) {
    var a = this.concat();
    a.splice(n);
    return a;
};
Array.prototype._drop = function (n) {
    var a = this.concat();
    return a.splice(n);
};
Array.prototype._sample = function () {
    return this[Function_1.randint(this.length)];
};
Array.prototype._asc = function (s) {
    if (s === void 0) { s = ''; }
    if (s === '') {
        return this.sort(function (a, b) { return a - b; });
    }
    else {
        return this.sort(function (a, b) { return a[s] - b[s]; });
    }
};
Array.prototype._desc = function (s) {
    if (s === void 0) { s = ''; }
    if (s === '') {
        return this.sort(function (a, b) { return b - a; });
    }
    else {
        return this.sort(function (a, b) { return b[s] - a[s]; });
    }
};
Array.prototype._rotate = function (n) {
    if (n === void 0) { n = 1; }
    n %= this.length;
    this.unshift.apply(this, this.splice(n));
    return this;
};
Array.prototype._shuffle = function () {
    var _this = this;
    var a = this.concat();
    Function_1.range(this.length).forEach(function (i) { return (_this[i] = a._remove(Function_1.randint(a.length))); });
    return this;
};
Array.prototype._flat = function () {
    var _this = this;
    var a = this.toString()
        .split(',')
        .map(function (n) { return Number(n); });
    this._clear();
    a.forEach(function (v, i) { return (_this[i] = v); });
    return this;
};
Array.prototype._clear = function () {
    this.length = 0;
    return this;
};
Array.prototype._delete = function (s) {
    var n = this.map(function (v, i) { return (v == s ? i : -1); }).filter(function (i) { return i !== -1; });
    this._remove.apply(this, n);
    return this;
};
Array.prototype._remove = function () {
    var _this = this;
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    if (n.length === 0) {
        return undefined;
    }
    else if (n.length === 1) {
        return this.splice(n._first(), 1)._first();
    }
    else {
        n._desc();
        return n.map(function (v) { return _this.splice(v, 1)._first(); });
    }
};
