console.log('Task2-PokerHandDecision')

import {InputCard} from './type'
import {isHand} from './rule'
import {inputHand, outputHand} from './io'

const input_card: InputCard[] = inputHand()
const poker_hand: string = isHand(input_card)
const output_card: string = outputHand(input_card)

console.log(poker_hand)
console.log(output_card)

/* SampleCase
0 01
3 06
3 10
3 01
1 01
*/
