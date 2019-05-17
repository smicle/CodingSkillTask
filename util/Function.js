"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
exports.input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
exports.range = function (start, stop, step) {
    if (stop === void 0) { stop = 0; }
    if (step === void 0) { step = 1; }
    switch (arguments.length) {
        case 1:
            return Array.from(Array(start), function (_, i) { return i; });
        case 2:
            var n = -start + stop;
            return Array.from(Array(n < 0 ? 0 : n), function (_) { return start++; });
        case 3:
            if (step > 0) {
                var n_1 = -start + stop;
                return Array.from(Array(n_1 < 0 ? 0 : n_1), function (_) { return start++; }).filter(function (_, i) { return i % step == 0; });
            }
            else if (step < 0) {
                var n_2 = start + -stop;
                return Array.from(Array(n_2 < 0 ? 0 : n_2), function (_) { return start--; }).filter(function (_, i) { return i % step == 0; });
            }
            else {
                console.error(Error('range() arg 3 must not be zero'));
                process.exit(1);
            }
    }
    return [];
};
