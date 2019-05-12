console.log(`Task2-PokerHandDecision`)

import {HandCard, PokerHand} from './PokerType'
import {judgeHand} from './HandRule'
import {initialHand, displayHand, choicePosition, changeHand} from './HandIO'
import {victoryResult} from './VictoryRule'

const first_hand: HandCard[][] = [initialHand(), initialHand()]
const second_hand: HandCard[][] = []

console.log(`
1p
${choicePosition(first_hand[0])}
${displayHand(first_hand[0])}
`)
second_hand.push(changeHand(first_hand[0]))

console.log(`
2p
${choicePosition(first_hand[1])}
${displayHand(first_hand[1])}
`)
second_hand.push(changeHand(first_hand[1]))

const result_hand: PokerHand[] = [judgeHand(second_hand[0]), judgeHand(second_hand[1])]

console.log(`
1p
${result_hand[0].hand}
${displayHand(second_hand[0])}`)
console.log(`
2p
${result_hand[1].hand}
${displayHand(second_hand[1])}
`)

victoryResult(second_hand[0], second_hand[1], result_hand[0].rank, result_hand[1].rank)
