"use strict";
exports.__esModule = true;
var PokerType_1 = require("./PokerType");
var isSuit = function (c) {
    // prettier-ignore
    return c.map(function (v) {
        return -PokerType_1.getHandSuit(v)
            .sort(function (a, b) { return a - b; })
            ._first();
    });
};
var getHandNumber = function (c) {
    return c
        .map(function (n) { return n.number; })
        .map(function (n) { return (n === 1 ? 14 : n); })
        .sort(function (a, b) { return b - a; });
};
var isNCard = function (c) {
    return c.map(function (v) {
        return getHandNumber(v)
            ._overlap()
            ._first();
    });
};
var isFullHouse = function (c) {
    // prettier-ignore
    return c.map(function (v) {
        var n = getHandNumber(v);
        var f = n._first(), l = n._last();
        return (n.includes(0)
            ? n._overlap()._first()
            : n._count(f) === 3 ? f : l);
    });
};
var isOnePair = function (c) {
    return c.map(function (v) {
        var n = getHandNumber(v);
        return n.includes(0) ? n._first() : n._overlap()._first();
    });
};
var isBigNumber = function (c) { return c.map(function (v) { return getHandNumber(v)._first(); }); };
var fightNumber = function (c) {
    return c[0] > c[1] ? '1p WIN!!!' : c[0] < c[1] ? '2p WIN!!!' : 'Draw';
};
exports.victoryResult = function (result_hand, second_hand) {
    var _a = result_hand.map(function (r) { return r.rank; }), r1 = _a[0], r2 = _a[1];
    // prettier-ignore
    return (r1 > r2 ? '1p WIN!!!' :
        r2 > r1 ? '2p WIN!!!' :
            fightNumber(r1 === 9 ? isSuit(second_hand) : // Royal Flush
                r1 === 8 ? isBigNumber(second_hand) : // Straight Flush
                    r1 === 7 ? isNCard(second_hand) : // Four Card
                        r1 === 6 ? isFullHouse(second_hand) : // Full House
                            r1 === 5 ? isSuit(second_hand) : // Flush
                                r1 === 4 ? isBigNumber(second_hand) : // Straight
                                    r1 === 3 ? isNCard(second_hand) : // Three Card
                                        r1 === 2 ? isNCard(second_hand) : // Two Pair
                                            r1 === 1 ? isOnePair(second_hand) : // One Pair
                                                isBigNumber(second_hand) // High card
            ));
};
