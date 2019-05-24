"use strict";
exports.__esModule = true;
var smicle = require("../Function");
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
    return Array.from(new Set(this));
};
Array.prototype._uniq$ = function () {
    var a = Array.from(new Set(this));
    return this._copy(a);
};
Array.prototype._overlap = function () {
    return this.filter(function (v, i, a) { return a.indexOf(v) === i && i !== a.lastIndexOf(v); });
};
Array.prototype._overlap$ = function () {
    var a = this.filter(function (v, i, a) { return a.indexOf(v) === i && i !== a.lastIndexOf(v); });
    return this._copy(a);
};
Array.prototype._first = function (n) {
    var _this = this;
    if (n === void 0) { n = 1; }
    if (n === 1) {
        return this[0];
    }
    else {
        return smicle.range(n).map(function (i) { return _this[i]; });
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
Array.prototype._take$ = function (n) {
    this.splice(n);
    return this;
};
Array.prototype._drop = function (n) {
    var a = this.concat();
    return a.splice(n);
};
Array.prototype._drop$ = function (n) {
    return this.splice(n);
};
Array.prototype._sample = function () {
    var n = smicle.randInt(this.length);
    return this[n];
};
Array.prototype._sample$ = function () {
    var n = smicle.randInt(this.length);
    return this._remove(n);
};
Array.prototype._asc = function (s) {
    if (s === void 0) { s = ''; }
    var l = this.concat();
    if (s === '') {
        return l.sort(function (a, b) { return a - b; });
    }
    else {
        return l.sort(function (a, b) { return a[s] - b[s]; });
    }
};
Array.prototype._asc$ = function (s) {
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
    var l = this.concat();
    if (s === '') {
        return l.sort(function (a, b) { return b - a; });
    }
    else {
        return l.sort(function (a, b) { return b[s] - a[s]; });
    }
};
Array.prototype._desc$ = function (s) {
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
    var a = this.concat();
    a.unshift.apply(a, a.splice(n));
    return a;
};
Array.prototype._rotate$ = function (n) {
    if (n === void 0) { n = 1; }
    n %= this.length;
    this.unshift.apply(this, this.splice(n));
    return this;
};
Array.prototype._shuffle = function () {
    var a = this.concat();
    return smicle.range(this.length).map(function (_) { return a._sample$(); });
};
Array.prototype._shuffle$ = function () {
    var _this = this;
    var a = this.concat();
    smicle.range(this.length).forEach(function (i) { return (_this[i] = a._sample$()); });
    return this;
};
Array.prototype._flat = function () {
    return this.toString()
        .split(',')
        .map(Number);
};
Array.prototype._flat$ = function () {
    var a = this.toString()
        .split(',')
        .map(Number);
    return this._copy(a);
};
Array.prototype._copy = function (a) {
    var _this = this;
    this._clear();
    a.forEach(function (v, i) { return (_this[i] = v); });
    return this;
};
Array.prototype._clear = function () {
    this.length = 0;
    return this;
};
Array.prototype._delete = function (s) {
    var a = this.concat();
    var n = [];
    a.map(function (v, i) { return v == s && n.push(i); });
    return a._remove.apply(a, n);
};
Array.prototype._delete$ = function (s) {
    var n = [];
    this.map(function (v, i) { return v == s && n.push(i); });
    this._remove$.apply(this, n);
    return this;
};
Array.prototype._remove = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    n._flat$();
    var a = this.concat();
    if (n.length === 0) {
        return undefined;
    }
    else if (n.length === 1) {
        a.splice(n._first(), 1)._first();
        return a;
    }
    else {
        return a.filter(function (v) { return !n.includes(v); });
    }
};
Array.prototype._remove$ = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    n._flat$();
    if (n.length === 0) {
        return undefined;
    }
    else if (n.length === 1) {
        this.splice(n._first(), 1)._first();
        return this;
    }
    else {
        var a = this.filter(function (v) { return !n.includes(v); });
        return this._copy(a);
    }
};
Array.prototype._insert = function (n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    var a = this.concat();
    a.splice.apply(a, [n, 0].concat(m._flat()));
    return a;
};
Array.prototype._insert$ = function (n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    this.splice.apply(this, [n, 0].concat(m._flat()));
    return this;
};
