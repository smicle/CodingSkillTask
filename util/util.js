"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
exports.input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
exports.range = function (n) { return Array.from({ length: n }, function (_, i) { return i; }); };
