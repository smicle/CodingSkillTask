"use strict";
exports.__esModule = true;
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
        return this.splice(n[0], 1)[0];
    }
    else {
        return n.map(function (v) { return _this.splice(v, 1)[0]; });
    }
};
