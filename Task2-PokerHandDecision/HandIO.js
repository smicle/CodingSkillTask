"use strict";
exports.__esModule = true;
var util_1 = require("../util/util");
exports.createDeck = function () {
    return util_1.range(52).map(function (i) { return ({
        suit: (i / 13) | 0,
        number: (i % 13) + 1
    }); });
};
var deck = exports.createDeck();
var convertSuit = function (n) { return 'SHDCJ'[n]; };
// prettier-ignore
var convertNumver = function (n) {
    return n === 0 ? '$' :
        n === 1 ? 'A' :
            n === 13 ? 'K' :
                n === 12 ? 'Q' :
                    n === 11 ? 'J' :
                        String(n);
};
var convertABCDE = function (v) {
    return new Map([['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4]]).get(v);
};
var convertCard = function (c) {
    return c.map(function (c) { return ({
        suit: convertSuit(c.suit),
        number: convertNumver(c.number)
    }); });
};
var cardDraw = function () {
    var n = (Math.random() * deck.length) | 0;
    var c = deck[n];
    deck = deck.filter(function (v) { return v !== deck[n]; });
    return c;
};
exports.initialHand = function () { return util_1.range(5).map(cardDraw); };
exports.displayHand = function (c) {
    return convertCard(c)
        .map(function (c) { return c.suit + ":" + c.number; })
        .join(' ');
};
exports.choicePosition = function (c) {
    return c.map(function (n, i) { return " " + 'ABCDE'[i] + " " + (n.number === 10 ? ' ' : ''); }).join(' ');
};
exports.changeHand = function (c) {
    var n = util_1.input('What to exchange?\n')
        .toUpperCase()
        .split('')
        .map(function (v) { return Number(convertABCDE(v)); });
    if (deck.slice(-1)[0].suit !== 4) {
        deck.push({ suit: 4, number: 0 });
    }
    return c.map(function (v, i) { return (n.some(function (a) { return a === i; }) ? cardDraw() : v); });
};
