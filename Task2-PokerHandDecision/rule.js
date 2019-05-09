"use strict";
exports.__esModule = true;
var isRoyal = function (c) {
    return [1, 13, 12, 11, 10].every(function (v) { return c.map(function (n) { return n.number; }).indexOf(v) !== -1; });
};
var isStraight = function (c) {
    if (isRoyal(c))
        return true;
    var n = c.map(function (n) { return n.number; }).sort(function (a, b) { return b - a; });
    var f = n[0];
    return n.every(function (v) { return v === f--; });
};
var isFlush = function (c) { return c.map(function (n) { return n.suit; }).every(function (v) { return v === c[0].suit; }); };
var isRoyalFlush = function (c) { return isRoyal(c) && isFlush(c); };
var isStraightFlush = function (c) { return isStraight(c) && isFlush(c); };
// prettier-ignore
var duplicateNumber = function (c, v) {
    return c.map(function (n) { return n.number; })
        .map(function (n, _, a) { return a.filter(function (m) { return m == n; }).length; })
        .filter(function (n) { return n == v; }).length;
};
var isFourCard = function (c) { return duplicateNumber(c, 4) == 4; };
var isThreeCard = function (c) { return duplicateNumber(c, 3) == 3; };
var isTwoPair = function (c) { return duplicateNumber(c, 2) == 4; };
var isOnePair = function (c) { return duplicateNumber(c, 2) == 2; };
var isFullHouse = function (c) { return isThreeCard(c) && isOnePair(c); };
// prettier-ignore
function isHand(c) {
    if (isRoyalFlush(c))
        return 'Royal Flush';
    if (isStraightFlush(c))
        return 'Straight Flush';
    if (isFourCard(c))
        return 'Four Card';
    if (isFullHouse(c))
        return 'Full House';
    if (isFlush(c))
        return 'Flush';
    if (isStraight(c))
        return 'Straight';
    if (isThreeCard(c))
        return 'Three Card';
    if (isTwoPair(c))
        return 'Two Pair';
    if (isOnePair(c))
        return 'One Pair';
    return 'High card';
}
exports.isHand = isHand;
