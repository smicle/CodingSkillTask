"use strict";
exports.__esModule = true;
var Type_1 = require("./Type");
var handDifference = function (c) {
    return Type_1.handNumber(c)
        .sort(function (a, b) { return a - b; })
        .map(function (_, i, a) { return a[i + 1] - a[i]; })
        .join('');
};
var isFlush = function (c) { return Type_1.handSuit(c).every(function (v) { return v === c[0].suit; }); };
var isRoyal = function (d) { return d === '9111'; };
var isStraight = function (d) { return d === '1111'; };
var isFourCard = function (d) { return /.000/.test(d); };
var isFullHouse = function (d) { return [/00.0/, /0.00/].some(function (r) { return r.test(d); }); };
var isThreeCard = function (d) { return [/00../, /.00./, /..00/].some(function (r) { return r.test(d); }); };
var isTwoPair = function (d) { return [/0.0./, /0..0/, /.0.0/].some(function (r) { return r.test(d); }); };
var isOnePair = function (d) { return [/0.../, /.0../, /..0./, /...0/].some(function (r) { return r.test(d); }); };
exports.isHand = function (c) {
    var d = handDifference(c);
    if (isFlush(c)) {
        if (isRoyal(d))
            return Type_1.hand_type[0];
        if (isStraight(d))
            return Type_1.hand_type[1];
        return Type_1.hand_type[4];
    }
    else {
        if (isFourCard(d))
            return Type_1.hand_type[2];
        if (isFullHouse(d))
            return Type_1.hand_type[3];
        if (isRoyal(d) || isStraight(d))
            return Type_1.hand_type[5];
        if (isThreeCard(d))
            return Type_1.hand_type[6];
        if (isTwoPair(d))
            return Type_1.hand_type[7];
        if (isOnePair(d))
            return Type_1.hand_type[8];
    }
    return Type_1.hand_type[9];
};
