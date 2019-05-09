"use strict";
exports.__esModule = true;
var duplicateNumber = function (c, v) {
    return c
        .map(function (n) { return n.number; })
        .map(function (n, _, a) { return a.filter(function (m) { return m === n; }).length; })
        .filter(function (n) { return n == v; }).length;
};
var isRoyal = function (c) {
    return [1, 13, 12, 11, 10].every(function (v) { return c.map(function (n) { return n.number; }).indexOf(v) !== -1; });
};
var isRoyalFlush = function (c) { return isRoyal(c) && isFlush(c); };
var isStraightFlush = function (c) { return isStraight(c) && isFlush(c); };
var isFourCard = function (c) { return duplicateNumber(c, 4) == 4; };
var isFullHouse = function (c) { return isThreeCard(c) && isOnePair(c); };
var isFlush = function (c) { return c.map(function (n) { return n.suit; }).every(function (v) { return v === c[0].suit; }); };
var isStraight = function (c) {
    if (isRoyal(c))
        return true;
    var n = c.map(function (n) { return n.number; }).sort(function (a, b) { return b - a; });
    var f = n[0];
    return n.every(function (v) { return v === f--; });
};
var isThreeCard = function (c) { return duplicateNumber(c, 3) == 3; };
var isTwoPair = function (c) { return duplicateNumber(c, 2) == 4; };
var isOnePair = function (c) { return duplicateNumber(c, 2) == 2; };
var handType = [
    { rank: 9, hand: 'Royal Flush' },
    { rank: 8, hand: 'Straight Flush' },
    { rank: 7, hand: 'Four Card' },
    { rank: 6, hand: 'Full House' },
    { rank: 5, hand: 'Flush' },
    { rank: 4, hand: 'Straight' },
    { rank: 3, hand: 'Three Card' },
    { rank: 2, hand: 'Two Pair' },
    { rank: 1, hand: 'One Pair' },
    { rank: 0, hand: 'High card' },
];
exports.isHand = function (c) {
    if (isRoyalFlush(c))
        return handType[0];
    if (isStraightFlush(c))
        return handType[1];
    if (isFourCard(c))
        return handType[2];
    if (isFullHouse(c))
        return handType[3];
    if (isFlush(c))
        return handType[4];
    if (isStraight(c))
        return handType[5];
    if (isThreeCard(c))
        return handType[6];
    if (isTwoPair(c))
        return handType[7];
    if (isOnePair(c))
        return handType[8];
    return handType[9];
};
