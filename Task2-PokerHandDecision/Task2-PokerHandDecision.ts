import {HandCard, PokerHand} from './PokerType'
import {judgeHand} from './HandRule'
import {initialHand, displayHand, changeHand} from './HandIO'
import {victoryResult} from './VictoryRule'

console.log('Task2-PokerHandDecision')
console.log('A card can be designated in "ABCDE" from the right.')

const first_hand: HandCard[][] = [initialHand(), initialHand()]
const second_hand: HandCard[][] = []

console.log(`
1p
${displayHand(first_hand[0])}`)
second_hand.push(changeHand(first_hand[0]))

console.log(`
2p
${displayHand(first_hand[1])}`)
second_hand.push(changeHand(first_hand[1]))

const result_hand: PokerHand[] = [judgeHand(second_hand[0]), judgeHand(second_hand[1])]

console.log(`
1p ${result_hand[0].hand}
${displayHand(second_hand[0])}`)
console.log(`
2p ${result_hand[1].hand}
${displayHand(second_hand[1])}`)

console.log(`
${victoryResult(result_hand, second_hand)}`)
