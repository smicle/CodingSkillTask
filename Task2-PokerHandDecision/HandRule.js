"use strict";
exports.__esModule = true;
var Type_1 = require("./Type");
// import {trumpInfo} from './HandIO'
// const jokerCount = (c: HandCard[]): number => jokerPosition(c).length
// const jokerPosition = (c: HandCard[]): number[] => getHandNumber(c).filter(n => n === 0)
var handDifference = function (c) {
    return Type_1.getHandNumber(c)
        .sort(function (a, b) { return a - b; })
        .map(function (_, i, a) { return a[i + 1] - a[i]; })
        .join('');
};
var isFlush = function (c) { return Type_1.getHandSuit(c).every(function (v) { return v === c[0].suit; }); };
var isRoyal = function (d) { return /9111/.test(d); };
var isStraight = function (d) { return /1111/.test(d); };
var isFourCard = function (d) { return /.000/.test(d); };
var isFullHouse = function (d) { return [/00.0/, /0.00/].some(function (r) { return r.test(d); }); };
var isThreeCard = function (d) { return [/00../, /.00./, /..00/].some(function (r) { return r.test(d); }); };
var isTwoPair = function (d) { return [/0.0./, /0..0/, /.0.0/].some(function (r) { return r.test(d); }); };
var isOnePair = function (d) { return [/0.../, /.0../, /..0./, /...0/].some(function (r) { return r.test(d); }); };
exports.isHand = function (c) {
    // if (jokerCount(c) === 2) {
    // } else if (jokerCount(c) === 1) {
    //   const [a] = jokerPosition(c)
    //   const r: PokerHand[] = trumpInfo.map(t => {
    //     c[a].number = t.number
    //     c[a].suit = t.suit
    //     return isHand(c)
    //   })
    //   return hand_type[Math.max(...r.map(c => c.rank))]
    // }
    var d = handDifference(c);
    if (isFlush(c)) {
        if (isRoyal(d))
            return Type_1.hand_type[9];
        if (isStraight(d))
            return Type_1.hand_type[8];
        return Type_1.hand_type[5];
    }
    else {
        if (isFourCard(d))
            return Type_1.hand_type[7];
        if (isFullHouse(d))
            return Type_1.hand_type[6];
        if (isRoyal(d) || isStraight(d))
            return Type_1.hand_type[4];
        if (isThreeCard(d))
            return Type_1.hand_type[3];
        if (isTwoPair(d))
            return Type_1.hand_type[2];
        if (isOnePair(d))
            return Type_1.hand_type[1];
    }
    return Type_1.hand_type[0];
};
