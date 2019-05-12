console.log(`Task2-PokerHandDecision`)

import {InputCard, PokerHand} from './Type'
import {isHand} from './HandRule'
import {randHand, outputHand, ABCDEPosition, changeHand} from './HandIO'
import {victoryOutput} from './HandBattle'

const input_hand_1p: InputCard[] = randHand()
const before_hand_1p: string = outputHand(input_hand_1p)
const input_hand_2p: InputCard[] = randHand()
const before_hand_2p: string = outputHand(input_hand_2p)

console.log(`
1p
${ABCDEPosition(input_hand_1p)}
${before_hand_1p}
`)
const change_hand_1p: InputCard[] = changeHand(input_hand_1p)
const judge_hand_1p: PokerHand = isHand(change_hand_1p)
const result_hand_1p: string = outputHand(change_hand_1p)

console.log(`
2p
${ABCDEPosition(input_hand_2p)}
${before_hand_2p}
`)
const change_hand_2p: InputCard[] = changeHand(input_hand_2p)
const judge_hand_2p: PokerHand = isHand(change_hand_2p)
const result_hand_2p: string = outputHand(change_hand_2p)

console.log(`
1p
${judge_hand_1p.hand}
${result_hand_1p}`)
console.log(`
2p
${judge_hand_2p.hand}
${result_hand_2p}
`)

victoryOutput(change_hand_1p, change_hand_2p, judge_hand_1p.rank, judge_hand_2p.rank)
