"use strict";
exports.__esModule = true;
var Type_1 = require("./Type");
var JokerHand_1 = require("./JokerHand");
// prettier-ignore
var duplicateNumber = function (c, v) {
    return c.map(function (n) { return n.number; })
        .map(function (n, _, a) { return a.filter(function (m) { return m === n; }).length; })
        .filter(function (n) { return n === v; }).length;
};
var isRoyal = function (c) {
    return [1, 13, 12, 11, 10].every(function (v) { return c.map(function (n) { return n.number; }).indexOf(v) !== -1; });
};
var isRoyalFlush = function (c) { return isRoyal(c) && isFlush(c); };
var isStraightFlush = function (c) { return isStraight(c) && isFlush(c); };
var isFourCard = function (c) { return duplicateNumber(c, 4) === 4; };
var isFullHouse = function (c) { return isThreeCard(c) && isOnePair(c); };
var isFlush = function (c) { return c.map(function (n) { return n.suit; }).every(function (v) { return v === c[0].suit; }); };
var isStraight = function (c) {
    if (isRoyal(c))
        return true;
    var n = c.map(function (n) { return n.number; }).sort(function (a, b) { return b - a; });
    var f = n[0];
    return n.every(function (v) { return v === f--; });
};
var isThreeCard = function (c) { return duplicateNumber(c, 3) === 3; };
var isTwoPair = function (c) { return duplicateNumber(c, 2) === 4; };
var isOnePair = function (c) { return duplicateNumber(c, 2) === 2; };
exports.isHand = function (c) {
    if (JokerHand_1.isJoker(c))
        return JokerHand_1.jokerHand(c);
    if (isRoyalFlush(c))
        return Type_1.handType[0];
    if (isStraightFlush(c))
        return Type_1.handType[1];
    if (isFourCard(c))
        return Type_1.handType[2];
    if (isFullHouse(c))
        return Type_1.handType[3];
    if (isFlush(c))
        return Type_1.handType[4];
    if (isStraight(c))
        return Type_1.handType[5];
    if (isThreeCard(c))
        return Type_1.handType[6];
    if (isTwoPair(c))
        return Type_1.handType[7];
    if (isOnePair(c))
        return Type_1.handType[8];
    return Type_1.handType[9];
};
