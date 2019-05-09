import {input, range} from '../util/util'
import {InputCard, OutputCard} from './Type'

const convertSuit = (n: number): string => {
  switch (n) {
    case 3:
      return 'S'
    case 2:
      return 'H'
    case 1:
      return 'D'
    case 0:
      return 'C'
    default:
      return ''
  }
}

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

export const outputHand = (c: InputCard[]): string =>
  convertCard(c)
    .map(c => `${c.suit}:${c.number}`)
    .join(' ')

let s: number = 3
let n: number = 1
let trump: InputCard[] = range(52).map(_ => {
  if (n === 14) {
    s--
    n = 1
  }
  return {
    suit: s,
    number: n++,
  }
})

export const randHand = (): InputCard[] => {
  const hand: InputCard[] = range(5).map(_ => {
    const n: number = (Math.random() * trump.length) | 0
    const c: InputCard = trump[n]
    trump = trump.filter(v => v !== trump[n])
    return c
  })
  return hand
}
