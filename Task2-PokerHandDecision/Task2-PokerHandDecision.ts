import * as readlineSync from 'readline-sync'
console.log('Task2-PokerHandDecision')

/* SampleCase
0 01
3 06
3 10
3 01
1 01
*/

// Card type
type InputCard = {
  suit: number
  number: number
}
type OutputCard = {
  suit: string
  number: string
}

// Function
const input = (s = ''): string => readlineSync.question(s)
const range = (n: number): number[] => Array.from({length: n}, (_, i) => i)

// Judgment of Hand
const popCardSuit = (c: InputCard[]): number[] => c.map(n => n.suit)
const popCardNumber = (c: InputCard[]): number[] => c.map(n => n.number)

const isRoyal = (c: InputCard[]): boolean =>
  [1, 13, 12, 11, 10].every(v => popCardNumber(c).indexOf(v) !== -1)

const isStraight = (c: InputCard[]): boolean => {
  if (isRoyal(c)) return true
  const n: number[] = popCardNumber(c).sort((a, b) => b - a)
  let f: number = n[0]
  return n.every(v => v === f--)
}

const isFlush = (c: InputCard[]): boolean => popCardSuit(c).every(v => v === c[0].suit)

const isRoyalFlush = (c: InputCard[]): boolean => isRoyal(c) && isFlush(c)
const isStraightFlush = (c: InputCard[]): boolean => isStraight(c) && isFlush(c)

const isHand = (c: InputCard[]): string => {
  if (isRoyalFlush(c)) return 'Royal Flush'
  if (isStraightFlush(c)) return 'Straight Flush'
  if (isFlush(c)) return 'Flush'
  if (isStraight(c)) return 'Straight'
  return 'No Pair'
}

// Convert of Card
// prettier-ignore
const convertSuit = (n: number): string =>
  n == 0 ? 'S' :
  n == 1 ? 'C' :
  n == 2 ? 'D' :
  n == 3 ? 'H' :
  ''
// prettier-ignore
const convertNumver = (n: number): string =>
  n ==  1 ? 'A' :
  n == 11 ? 'J' :
  n == 12 ? 'Q' :
  n == 13 ? 'K' :
  String(n)
const convertCard = (c: InputCard[]): OutputCard[] =>
  c.map(c => ({
    suit: convertSuit(c.suit),
    number: convertNumver(c.number),
  }))

// Input Output
// prettier-ignore
const inputCard = (): InputCard[] => range(5)
  .map(_ => input().split(' ').map(n => Number(n)))
  .map(c => ({
    suit: c[0],
    number: c[1],
  }))
const outputFormat = (c: InputCard[]): string => {
  let card: string = ''
  convertCard(c).forEach(c => {
    const s: string = c.suit
    const n: string = c.number
    card += `${s}:${n} `
  })
  return card
}

/*
const input_card: InputCard[] = inputCard()
/*/
const input_card: InputCard[] = [
  {suit: 0, number: 1},
  {suit: 3, number: 6},
  {suit: 3, number: 10},
  {suit: 3, number: 1},
  {suit: 1, number: 1},
]
// */

const poker_hand: string = isHand(input_card)
let output_card: string = outputFormat(input_card)

console.log(poker_hand)
console.log(output_card)
