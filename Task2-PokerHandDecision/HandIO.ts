import * as util from 'smicle-util'
import {HandCard, DisplayCard} from './PokerType'

export const createDeck = (): HandCard[] =>
  util.range(52).map(i => ({
    suit: (i / 13) | 0,
    number: (i % 13) + 1,
  }))

let deck: HandCard[] = createDeck()

// prettier-ignore
const convertSuit = (n: number): string =>
  n === 4 ? 'JOKER' :
  `\u001b[${n % 3 ? 31 : 34}m${'♠♥♦♣'[n]} \u001b[0m`

// prettier-ignore
const convertNumver = (n: number): string =>
  n ===  0 ?  '' :
  n ===  1 ? 'A' :
  n === 13 ? 'K' :
  n === 12 ? 'Q' :
  n === 11 ? 'J' :
  String(n)

const convertABCDE = (v: string): number | undefined =>
  new Map([['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4]]).get(v)

const convertCard = (c: HandCard[]): DisplayCard[] =>
  c.map(v => ({
    suit: convertSuit(v.suit),
    number: convertNumver(v.number),
  }))

const cardDraw = (): HandCard => {
  const n = util.randInt(deck.length)
  const c: HandCard = deck[n]
  deck = deck.filter(v => v !== deck[n])
  return c
}

export const initialHand = (): HandCard[] => util.range(5).map(cardDraw)

export const displayHand = (c: HandCard[]): string =>
  convertCard(c)
    .map(c => `${c.suit}${c.number}`)
    .join(' ')

export const changeHand = (c: HandCard[]): HandCard[] => {
  // prettier-ignore
  const n: number[] = util.input('Change card ')
    .toUpperCase()
    .split('')
    .map(v => Number(convertABCDE(v)))

  // addJoker
  if (deck._last().suit !== 4) {
    deck.push({suit: 4, number: 0})
  }

  return c.map((v, i) => (n.some(a => a === i) ? cardDraw() : v))
}
