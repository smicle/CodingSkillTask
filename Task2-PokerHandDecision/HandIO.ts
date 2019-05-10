import {input, range} from '../util/util'
import {InputCard, OutputCard} from './Type'

let s: number = 3
let n: number = 1
let trump: InputCard[] = range(54).map(_ => {
  if (n === 14) {
    s--
    n = 1
  }

  if (s === -1) {
    return {
      suit: 4,
      number: 0,
    }
  }

  return {
    suit: s,
    number: n++,
  }
})

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

const cardExchange = (): InputCard => {
  const n: number = (Math.random() * trump.length) | 0
  const c: InputCard = trump[n]
  trump = trump.filter(v => v !== trump[n])
  return c
}

export const randHand = (): InputCard[] => range(5).map(cardExchange)

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
  return c.map((v, i) => (n.some(a => a === i) ? cardExchange() : v))
}
