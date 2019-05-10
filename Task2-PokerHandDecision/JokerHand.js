"use strict";
exports.__esModule = true;
var util_1 = require("../util/util");
var Type_1 = require("./Type");
var jokerCount = function (c) { return c.filter(function (n) { return n.number === 0; }).length; };
var jokerOverlap = function (c) { return c.filter(function (n) { return n.number !== 0; }); };
// prettier-ignore
var duplicateNumber = function (c, v) {
    return c.map(function (n) { return n.number; })
        .map(function (n, _, a) { return a.filter(function (m) { return m === n; }).length; })
        .filter(function (n) { return n === v; }).length;
};
var isRoyal = function (c) {
    var n = [1, 13, 12, 11, 10].filter(function (v) { return c.map(function (n) { return n.number; }).indexOf(v) !== -1; }).length;
    var l = jokerCount(c);
    return n + l === 5 ? true : false;
};
var isRoyalFlush = function (c) { return isRoyal(c) && isFlush(c); };
var isStraightFlush = function (c) { return isStraight(c) && isFlush(c); };
var isFourCard = function (c) {
    var l = jokerCount(c);
    var d = jokerOverlap(c);
    if (l === 2)
        return isThreeCard(d) || isOnePair(d);
    if (l === 1)
        return isFourCard(d) || isThreeCard(d);
    return duplicateNumber(c, 4) === 4;
};
var isFullHouse = function (c) {
    var l = jokerCount(c);
    var d = jokerOverlap(c);
    if (l === 1)
        return isTwoPair(d);
    return isThreeCard(d) && isOnePair(d);
};
// prettier-ignore
var isFlush = function (c) {
    return c.map(function (n) { return n.suit; })
        .sort(function (a, b) { return a - b; })
        .every(function (v, _, a) { return v === 4 || v === a[0]; });
};
var isStraight = function (c) {
    if (isRoyal(c))
        return true;
    var l = jokerCount(c);
    if (l === 0) {
        var n = c.map(function (n) { return n.number; }).sort(function (a, b) { return b - a; });
        var f_1 = n[0];
        return n.every(function (v) { return v === f_1--; });
    }
    return util_1.range(5)
        .map(function (i) {
        var n = c
            .map(function (n) { return n.number; })
            .filter(function (n) { return n !== 0; })
            .sort(function (a, b) { return b - a; });
        n.splice(i, 0, 0);
        var f = n[0] === 0 ? n[1] : n[0];
        if (l === 1)
            return n.every(function (v) { return v === f-- || v === 0; });
        return util_1.range(4 - i)
            .map(function (j) { return j + 1; })
            .map(function (j) {
            var m = n.concat();
            m.splice(j + i, 0, 0);
            return m.every(function (v) { return v === f-- || v === 0; });
        })
            .some(function (n) { return n; });
    })
        .some(function (n) { return n; });
};
var isThreeCard = function (c) {
    var l = jokerCount(c);
    var d = jokerOverlap(c);
    if (l === 2)
        return true;
    if (l === 1)
        return isOnePair(d);
    return duplicateNumber(c, 3) === 3;
};
var isTwoPair = function (c) { return duplicateNumber(c, 2) === 4; };
var isOnePair = function (c) {
    var l = jokerCount(c);
    if (l === 1)
        return true;
    return duplicateNumber(c, 2) === 2;
};
exports.isJoker = function (c) { return (jokerCount(c) === 0 ? false : true); };
exports.jokerHand = function (c) {
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
