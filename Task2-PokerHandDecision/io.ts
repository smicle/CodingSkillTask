import {input, range} from '../util/util'
import {InputCard, OutputCard} from './type'

const convertSuit = (n: number): string => {
  switch (n) {
    case 0:
      return 'S'
    case 1:
      return 'C'
    case 2:
      return 'D'
    case 3:
      return 'H'
    default:
      return ''
  }
}
const convertNumver = (n: number): string => {
  switch (n) {
    case 1:
      return 'A'
    case 11:
      return 'J'
    case 12:
      return 'Q'
    case 13:
      return 'K'
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
