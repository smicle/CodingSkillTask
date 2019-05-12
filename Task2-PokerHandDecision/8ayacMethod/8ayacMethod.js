"use strict";
exports.__esModule = true;
console.log("Task2-PokerHandDecision");
var HandRule_1 = require("./HandRule");
var HandIO_1 = require("./HandIO");
var HandBattle_1 = require("./HandBattle");
var input_hand_1p = HandIO_1.randHand();
var before_hand_1p = HandIO_1.outputHand(input_hand_1p);
var input_hand_2p = HandIO_1.randHand();
var before_hand_2p = HandIO_1.outputHand(input_hand_2p);
console.log("\n1p\n" + HandIO_1.ABCDEPosition(input_hand_1p) + "\n" + before_hand_1p + "\n");
var change_hand_1p = HandIO_1.changeHand(input_hand_1p);
var judge_hand_1p = HandRule_1.isHand(change_hand_1p);
var result_hand_1p = HandIO_1.outputHand(change_hand_1p);
console.log("\n2p\n" + HandIO_1.ABCDEPosition(input_hand_2p) + "\n" + before_hand_2p + "\n");
var change_hand_2p = HandIO_1.changeHand(input_hand_2p);
var judge_hand_2p = HandRule_1.isHand(change_hand_2p);
var result_hand_2p = HandIO_1.outputHand(change_hand_2p);
console.log("\n1p\n" + judge_hand_1p.hand + "\n" + result_hand_1p);
console.log("\n2p\n" + judge_hand_2p.hand + "\n" + result_hand_2p + "\n");
HandBattle_1.victoryOutput(change_hand_1p, change_hand_2p, judge_hand_1p.rank, judge_hand_2p.rank);