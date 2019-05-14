"use strict";
exports.__esModule = true;
console.log("Task2-PokerHandDecision");
var HandRule_1 = require("./HandRule");
var HandIO_1 = require("./HandIO");
var VictoryRule_1 = require("./VictoryRule");
var first_hand = [HandIO_1.initialHand(), HandIO_1.initialHand()];
var second_hand = [];
console.log("\n1p\n" + HandIO_1.choicePosition(first_hand[0]) + "\n" + HandIO_1.displayHand(first_hand[0]) + "\n");
second_hand.push(HandIO_1.changeHand(first_hand[0]));
console.log("\n2p\n" + HandIO_1.choicePosition(first_hand[1]) + "\n" + HandIO_1.displayHand(first_hand[1]) + "\n");
// second_hand.push(changeHand(first_hand[1]))
second_hand.push([
    { suit: 0, number: 8 },
    { suit: 1, number: 3 },
    { suit: 2, number: 3 },
    { suit: 3, number: 2 },
    { suit: 4, number: 0 },
]);
var result_hand = [HandRule_1.judgeHand(second_hand[0]), HandRule_1.judgeHand(second_hand[1])];
console.log("\n1p " + result_hand[0].hand + "\n" + HandIO_1.displayHand(second_hand[0]));
console.log("\n2p " + result_hand[1].hand + "\n" + HandIO_1.displayHand(second_hand[1]) + "\n");
console.log(VictoryRule_1.victoryResult(result_hand, second_hand));
