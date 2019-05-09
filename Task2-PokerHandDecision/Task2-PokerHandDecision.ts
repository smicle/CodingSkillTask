console.log(`Task2-PokerHandDecision
`)

import {InputCard, PokerHand} from './Type'
import {isHand} from './HandRule'
import {randHand, outputHand} from './HandIO'
import {victoryOutput} from './HandBattle'

const input_hand_1p: InputCard[] = randHand()
const judge_hand_1p: PokerHand = isHand(input_hand_1p)
const output_hand_1p: string = outputHand(input_hand_1p)

const input_hand_2p: InputCard[] = randHand()
const judge_hand_2p: PokerHand = isHand(input_hand_2p)
const output_hand_2p: string = outputHand(input_hand_2p)

console.log(`1p
${judge_hand_1p.hand}
${output_hand_1p}
`)

console.log(`2p
${judge_hand_2p.hand}
${output_hand_2p}
`)

victoryOutput(input_hand_1p, input_hand_2p, judge_hand_1p.rank, judge_hand_2p.rank)
