"use strict";
exports.__esModule = true;
exports.victoryOutput = function (c_1p, c_2p, r_1p, r_2p) {
    if (r_1p > r_2p) {
        console.log('1p WIN!!!');
        return;
    }
    else if (r_2p > r_1p) {
        console.log('2p WIN!!!');
        return;
    }
    var getfirstHand = function (c) {
        var d = c
            .map(function (v) { return ({ suit: v.suit, number: v.number === 1 ? 14 : v.number }); })
            .sort(function (a, b) { return b.number - a.number; });
        return d.filter(function (n) { return n === d[0]; }).sort(function (a, b) { return b.suit - a.suit; })[0];
    };
    var v_1p = getfirstHand(c_1p);
    var v_2p = getfirstHand(c_2p);
    if (v_1p.number > v_2p.number) {
        console.log('1p WIN!!!');
        return;
    }
    else if (v_2p.number > v_1p.number) {
        console.log('2p WIN!!!');
        return;
    }
    if (v_1p.suit > v_2p.suit) {
        console.log('1p WIN!!!');
    }
    else {
        console.log('2p WIN!!!');
    }
};
