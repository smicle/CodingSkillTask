"use strict";
exports.__esModule = true;
var PokerType_1 = require("./PokerType");
var HandIO_1 = require("./HandIO");
var numberDifference = function (c) {
    return PokerType_1.getHandNumber(c)
        .sort(function (a, b) { return a - b; })
        .map(function (_, i, a) { return a[i + 1] - a[i]; })
        .join('');
};
var isFlush = function (c) { return PokerType_1.getHandSuit(c).every(function (v) { return v === c[0].suit; }); };
var isRoyal = function (d) { return /9111/.test(d); };
var isStraight = function (d) { return /1111/.test(d); };
var isFourCard = function (d) { return /.000/.test(d); };
var isFullHouse = function (d) { return [/00.0/, /0.00/].some(function (r) { return r.test(d); }); };
var isThreeCard = function (d) { return [/00../, /.00./, /..00/].some(function (r) { return r.test(d); }); };
var isTwoPair = function (d) { return [/0.0./, /0..0/, /.0.0/].some(function (r) { return r.test(d); }); };
var isOnePair = function (d) { return [/0.../, /.0../, /..0./, /...0/].some(function (r) { return r.test(d); }); };
var isHand = function (c) {
    var n = numberDifference(c);
    if (isFlush(c)) {
        if (isRoyal(n))
            return PokerType_1.hand_type[9];
        if (isStraight(n))
            return PokerType_1.hand_type[8];
        return PokerType_1.hand_type[5];
    }
    else {
        if (isFourCard(n))
            return PokerType_1.hand_type[7];
        if (isFullHouse(n))
            return PokerType_1.hand_type[6];
        if (isRoyal(n) || isStraight(n))
            return PokerType_1.hand_type[4];
        if (isThreeCard(n))
            return PokerType_1.hand_type[3];
        if (isTwoPair(n))
            return PokerType_1.hand_type[2];
        if (isOnePair(n))
            return PokerType_1.hand_type[1];
    }
    return PokerType_1.hand_type[0];
};
var isJoker = function (c) { return PokerType_1.getHandNumber(c).some(function (n) { return n === 0; }); };
exports.judgeHand = function (c) {
    if (isJoker(c)) {
        var d_1 = c.concat();
        d_1.sort(function (a, b) { return a.number - b.number; }).shift();
        return PokerType_1.hand_type[Math.max.apply(Math, HandIO_1.createDeck()
            .filter(function (a) { return d_1.findIndex(function (b) { return JSON.stringify(a) === JSON.stringify(b); }) === -1; })
            .map(function (v) { return isHand(d_1.concat([v])); })
            .map(function (v) { return v.rank; }))];
    }
    return isHand(c);
};
