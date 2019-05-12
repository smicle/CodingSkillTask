"use strict";
exports.__esModule = true;
exports.handSuit = function (c) { return c.map(function (n) { return n.suit; }); };
exports.handNumber = function (c) { return c.map(function (n) { return n.number; }); };
exports.hand_type = [
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
