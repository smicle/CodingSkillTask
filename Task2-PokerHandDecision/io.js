"use strict";
exports.__esModule = true;
var util_1 = require("../util/util");
var convertSuit = function (n) {
    switch (n) {
        case 0:
            return 'S';
        case 1:
            return 'C';
        case 2:
            return 'D';
        case 3:
            return 'H';
        default:
            return '';
    }
};
var convertNumver = function (n) {
    switch (n) {
        case 1:
            return 'A';
        case 11:
            return 'J';
        case 12:
            return 'Q';
        case 13:
            return 'K';
        default:
            return String(n);
    }
};
var convertCard = function (c) {
    return c.map(function (c) { return ({
        suit: convertSuit(c.suit),
        number: convertNumver(c.number)
    }); });
};
// prettier-ignore
exports.inputHand = function () { return util_1.range(5)
    .map(function (_) { return util_1.input().split(' ').map(function (n) { return Number(n); }); })
    .map(function (c) { return ({
    suit: c[0],
    number: c[1]
}); }); };
exports.outputHand = function (c) {
    return convertCard(c)
        .map(function (c) { return c.suit + ":" + c.number; })
        .join(' ');
};
