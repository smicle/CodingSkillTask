import {input, range} from '../../util/util'
import {InputCard, OutputCard} from './Type'

export const createDeck = (): InputCard[] => {
  let s: number = 3
  let n: number = 1

  return range(52).map(_ => {
    if (n === 14) {
      s--
      n = 1
    }

    return {
      suit: s,
      number: n++,
    }
  })
}
// export const trumpInfo: InputCard[] = createDeck()
let trumpDeck: InputCard[] = createDeck()

const convertSuit = (n: number): string => 'CDHSJ'[n]

const convertNumver = (n: number): string => {
  switch (n) {
    case 1:
      return 'A'
    case 13:
      return 'K'
    case 12:
      return 'Q'
    case 11:
      return 'J'
    case 0:
      return '$'
    default:
      return String(n)
  }
}

const convertCard = (c: InputCard[]): OutputCard[] =>
  c.map(c => ({
    suit: convertSuit(c.suit),
    number: convertNumver(c.number),
  }))

// prettier-ignore
export const inputHand = (): InputCard[] => range(5)
  .map(_ => input().split(' ').map(n => Number(n)))
  .map(c => ({
    suit: c[0],
    number: c[1],
  }))

const cardDraw = (): InputCard => {
  const n: number = (Math.random() * trumpDeck.length) | 0
  const c: InputCard = trumpDeck[n]
  trumpDeck = trumpDeck.filter(v => v !== trumpDeck[n])
  return c
}

export const randHand = (): InputCard[] => range(5).map(cardDraw)

export const outputHand = (c: InputCard[]): string =>
  convertCard(c)
    .map(c => `${c.suit}:${c.number}`)
    .join(' ')

export const ABCDEPosition = (c: InputCard[]): string =>
  c.map((n, i) => ` ${'ABCDE'[i]} ${n.number === 10 ? ' ' : ''}`).join(' ')

const convertABCDE = (v: string): number | string => {
  switch (v) {
    case 'A':
      return 0
    case 'B':
      return 1
    case 'C':
      return 2
    case 'D':
      return 3
    case 'E':
      return 4
    default:
      return ''
  }
}

export const changeHand = (c: InputCard[]): InputCard[] => {
  const n: number[] = input('What to exchange?\n')
    .toUpperCase()
    .split('')
    .map(v => Number(convertABCDE(v)))
  return c.map((v, i) => (n.some(a => a === i) ? cardDraw() : v))
}
