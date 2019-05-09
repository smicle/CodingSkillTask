"use strict";
exports.__esModule = true;
console.log('Task2-PokerHandDecision');
var io_1 = require("./io");
var rule_1 = require("./rule");
var input_card = io_1.inputHand();
var poker_hand = rule_1.isHand(input_card);
var output_card = io_1.outputHand(input_card);
console.log(poker_hand);
console.log(output_card);
/* SampleCase
0 01
3 06
3 10
3 01
1 01
*/
/*
const input_card: InputCard[] = [
  {suit: 0, number: 1},
  {suit: 3, number: 6},
  {suit: 3, number: 10},
  {suit: 3, number: 1},
  {suit: 1, number: 1},
]

const input_card: InputCard[] = [
  {suit: 0, number: 2},
  {suit: 1, number: 2},
  {suit: 2, number: 2},
  {suit: 3, number: 1},
  {suit: 1, number: 1},
]
// */
