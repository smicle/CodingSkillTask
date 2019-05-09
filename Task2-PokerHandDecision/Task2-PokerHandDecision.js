"use strict";
exports.__esModule = true;
console.log('Task2-PokerHandDecision');
var rule_1 = require("./rule");
var io_1 = require("./io");
var input_hand = io_1.inputHand();
var judge_hand = rule_1.isHand(input_hand);
var output_hand = io_1.outputHand(input_hand);
console.log(judge_hand);
console.log(output_hand);
/* SampleCase
0 01
3 06
3 10
3 01
1 01
*/
