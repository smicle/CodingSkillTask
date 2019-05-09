"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
console.log('Task2-PokerHandDecision');
var input = function (s) {
    if (s === void 0) { s = ''; }
    return readlineSync.question(s);
};
var range = function (n) { return Array.from({ length: n }, function (_, i) { return i; }); };
var popCardSuit = function (c) { return c.map(function (n) { return n.suit; }); };
var popCardNumber = function (c) { return c.map(function (n) { return n.number; }); };
var isRoyal = function (c) {
    return [1, 13, 12, 11, 10].every(function (v) { return popCardNumber(c).indexOf(v) !== -1; });
};
var isStraight = function (c) {
    if (isRoyal(c))
        return true;
    var n = popCardNumber(c).sort(function (a, b) { return b - a; });
    var f = n[0];
    return n.every(function (v) { return v === f--; });
};
var isFlush = function (c) { return popCardSuit(c).every(function (v) { return v === c[0].suit; }); };
var isRoyalFlush = function (c) { return isRoyal(c) && isFlush(c); };
var isStraightFlush = function (c) { return isStraight(c) && isFlush(c); };
var isHand = function (c) {
    if (isRoyalFlush(c))
        return 'Royal Flush';
    if (isStraightFlush(c))
        return 'Straight Flush';
    if (isFlush(c))
        return 'Flush';
    if (isStraight(c))
        return 'Straight';
    return 'No Pair';
};
var convertSuit = function (n) {
    return n == 0 ? 'S' :
        n == 1 ? 'C' :
            n == 2 ? 'D' :
                n == 3 ? 'H' :
                    '';
};
var convertNumver = function (n) {
    return n == 1 ? 'A' :
        n == 11 ? 'J' :
            n == 12 ? 'Q' :
                n == 13 ? 'K' :
                    String(n);
};
var convertCard = function (c) {
    return c.map(function (c) { return ({
        suit: convertSuit(c.suit),
        number: convertNumver(c.number),
    }); });
};
var inputCard = function () { return range(5)
    .map(function (_) { return input().split(' ').map(function (n) { return Number(n); }); })
    .map(function (c) { return ({
    suit: c[0],
    number: c[1],
}); }); };
var outputFormat = function (c) {
    var card = '';
    convertCard(c).forEach(function (c) {
        var s = c.suit;
        var n = c.number;
        card += s + ":" + n + " ";
    });
    return card;
};
var input_card = inputCard();
var poker_hand = isHand(input_card);
var output_card = outputFormat(input_card);
console.log(poker_hand);
console.log(output_card);
