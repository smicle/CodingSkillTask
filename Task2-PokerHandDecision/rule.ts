import {InputCard as ic} from './type'

const isRoyal = (c: ic[]): boolean =>
  [1, 13, 12, 11, 10].every(v => c.map(n => n.number).indexOf(v) !== -1)

const isStraight = (c: ic[]): boolean => {
  if (isRoyal(c)) return true
  const n: number[] = c.map(n => n.number).sort((a, b) => b - a)
  let f: number = n[0]
  return n.every(v => v === f--)
}
const isFlush = (c: ic[]): boolean => c.map(n => n.suit).every(v => v === c[0].suit)

const isRoyalFlush = (c: ic[]): boolean => isRoyal(c) && isFlush(c)
const isStraightFlush = (c: ic[]): boolean => isStraight(c) && isFlush(c)

const duplicateNumber = (c: ic[], v: number): number =>
  c
    .map(n => n.number)
    .map((n, _, a) => a.filter(m => m == n).length)
    .filter(n => n == v).length

const isFourCard = (c: ic[]): boolean => duplicateNumber(c, 4) == 4
const isThreeCard = (c: ic[]): boolean => duplicateNumber(c, 3) == 3

const isTwoPair = (c: ic[]): boolean => duplicateNumber(c, 2) == 4
const isOnePair = (c: ic[]): boolean => duplicateNumber(c, 2) == 2

const isFullHouse = (c: ic[]): boolean => isThreeCard(c) && isOnePair(c)

// prettier-ignore
export const isHand = (c: ic[]): string => {
  if (isRoyalFlush(c))    return 'Royal Flush'
  if (isStraightFlush(c)) return 'Straight Flush'
  if (isFourCard(c))      return 'Four Card'
  if (isFullHouse(c))     return 'Full House'
  if (isFlush(c))         return 'Flush'
  if (isStraight(c))      return 'Straight'
  if (isThreeCard(c))     return 'Three Card'
  if (isTwoPair(c))       return 'Two Pair'
  if (isOnePair(c))       return 'One Pair'
  return 'High card'
}
