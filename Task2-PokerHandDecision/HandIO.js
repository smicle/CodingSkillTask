"use strict";
exports.__esModule = true;
var util_1 = require("../util/util");
var s = 3;
var n = 1;
var trump = util_1.range(52).map(function (_) {
    if (n === 14) {
        s--;
        n = 1;
    }
    return {
        suit: s,
        number: n++
    };
});
var convertSuit = function (n) { return 'SHDC'[n]; };
var convertNumver = function (n) {
    switch (n) {
        case 1:
            return 'A';
        case 13:
            return 'K';
        case 12:
            return 'Q';
        case 11:
            return 'J';
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
var cardExchange = function () {
    var n = (Math.random() * trump.length) | 0;
    var c = trump[n];
    trump = trump.filter(function (v) { return v !== trump[n]; });
    return c;
};
exports.randHand = function () { return util_1.range(5).map(cardExchange); };
exports.outputHand = function (c) {
    return convertCard(c)
        .map(function (c) { return c.suit + ":" + c.number; })
        .join(' ');
};
exports.ABCDEPosition = function (c) {
    return c.map(function (n, i) { return " " + 'ABCDE'[i] + " " + (n.number === 10 ? ' ' : ''); }).join(' ');
};
var convertABCDE = function (v) {
    switch (v) {
        case 'A':
            return 0;
        case 'B':
            return 1;
        case 'C':
            return 2;
        case 'D':
            return 3;
        case 'E':
            return 4;
        default:
            return '';
    }
};
exports.changeHand = function (c) {
    var n = util_1.input('What to exchange?\n')
        .toUpperCase()
        .split('')
        .map(function (v) { return Number(convertABCDE(v)); });
    return c.map(function (v, i) { return (n.some(function (a) { return a === i; }) ? cardExchange() : v); });
};
