console.log('Task2-PokerHandDecision')

import {InputCard} from './type'
import {isHand} from './rule'
import {inputHand, outputHand} from './io'

const input_hand: InputCard[] = inputHand()
const judge_hand: string = isHand(input_hand)
const output_hand: string = outputHand(input_hand)

console.log(judge_hand)
console.log(output_hand)

/* SampleCase
0 01
3 06
3 10
3 01
1 01
*/
