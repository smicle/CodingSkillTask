"use strict";
exports.__esModule = true;
require("../util/Prototype");
exports.getHandSuit = function (c) { return c.map(function (n) { return n.suit; }); };
exports.getHandNumber = function (c) { return c.map(function (n) { return n.number; }); };
exports.hand_type = [
    { rank: 0, hand: 'High card' },
    { rank: 1, hand: 'One Pair' },
    { rank: 2, hand: 'Two Pair' },
    { rank: 3, hand: 'Three Card' },
    { rank: 4, hand: 'Straight' },
    { rank: 5, hand: 'Flush' },
    { rank: 6, hand: 'Full House' },
    { rank: 7, hand: 'Four Card' },
    { rank: 8, hand: 'Straight Flush' },
    { rank: 9, hand: 'Royal Flush' },
];
