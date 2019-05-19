"use strict";
exports.__esModule = true;
require("../util/Prototype");
var HandRule_1 = require("./HandRule");
var HandIO_1 = require("./HandIO");
var VictoryRule_1 = require("./VictoryRule");
// const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var fruits = ['apple', 'orange', 'banana', 'kiwi'];
console.log(fruits._first());
console.log(fruits._first(2));
console.log(fruits._last());
console.log(fruits._last(2));
console.log('Task2-PokerHandDecision');
console.log('A card can be designated in "ABCDE" from the right.');
var first_hand = [HandIO_1.initialHand(), HandIO_1.initialHand()];
var second_hand = [];
console.log("\n1p\n" + HandIO_1.displayHand(first_hand[0]));
second_hand.push(HandIO_1.changeHand(first_hand[0]));
console.log("\n2p\n" + HandIO_1.displayHand(first_hand[1]));
second_hand.push(HandIO_1.changeHand(first_hand[1]));
var result_hand = [HandRule_1.judgeHand(second_hand[0]), HandRule_1.judgeHand(second_hand[1])];
console.log("\n1p " + result_hand[0].hand + "\n" + HandIO_1.displayHand(second_hand[0]));
console.log("\n2p " + result_hand[1].hand + "\n" + HandIO_1.displayHand(second_hand[1]));
console.log("\n" + VictoryRule_1.victoryResult(result_hand, second_hand));
