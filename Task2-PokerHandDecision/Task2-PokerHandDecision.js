"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
console.log('Task2-PokerHandDecision');
var input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
var range = function (n) { return Array.from({ length: n }, function (_, i) { return i; }); };
var raw_card = range(5).slice().map(function (_) {
    var c = input()
        .split(' ')
        .map(function (n) { return Number(n); });
    return {
        suit: c[0],
        num: c[1],
    };
});
var complete_card = raw_card.map(function (c) {
    var s = c.suit == 0 ? 'S' : c.suit == 1 ? 'C' : c.suit == 2 ? 'D' : c.suit == 3 ? 'H' : '';
    return {
        suit: s,
        num: String(c.num),
    };
});
console.log(complete_card);
