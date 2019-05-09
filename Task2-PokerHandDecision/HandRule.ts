import {InputCard as ic, PokerHand} from './Type'

const duplicateNumber = (c: ic[], v: number): number =>
  c
    .map(n => n.number)
    .map((n, _, a) => a.filter(m => m === n).length)
    .filter(n => n == v).length

const isRoyal = (c: ic[]): boolean =>
  [1, 13, 12, 11, 10].every(v => c.map(n => n.number).indexOf(v) !== -1)

const isRoyalFlush = (c: ic[]): boolean => isRoyal(c) && isFlush(c)

const isStraightFlush = (c: ic[]): boolean => isStraight(c) && isFlush(c)

const isFourCard = (c: ic[]): boolean => duplicateNumber(c, 4) == 4

const isFullHouse = (c: ic[]): boolean => isThreeCard(c) && isOnePair(c)

const isFlush = (c: ic[]): boolean => c.map(n => n.suit).every(v => v === c[0].suit)

const isStraight = (c: ic[]): boolean => {
  if (isRoyal(c)) return true
  const n: number[] = c.map(n => n.number).sort((a, b) => b - a)
  let f: number = n[0]
  return n.every(v => v === f--)
}

const isThreeCard = (c: ic[]): boolean => duplicateNumber(c, 3) == 3

const isTwoPair = (c: ic[]): boolean => duplicateNumber(c, 2) == 4

const isOnePair = (c: ic[]): boolean => duplicateNumber(c, 2) == 2

const handType: PokerHand[] = [
  {rank: 9, hand: 'Royal Flush'},
  {rank: 8, hand: 'Straight Flush'},
  {rank: 7, hand: 'Four Card'},
  {rank: 6, hand: 'Full House'},
  {rank: 5, hand: 'Flush'},
  {rank: 4, hand: 'Straight'},
  {rank: 3, hand: 'Three Card'},
  {rank: 2, hand: 'Two Pair'},
  {rank: 1, hand: 'One Pair'},
  {rank: 0, hand: 'High card'},
]

export const isHand = (c: ic[]): PokerHand => {
  if (isRoyalFlush(c)) return handType[0]
  if (isStraightFlush(c)) return handType[1]
  if (isFourCard(c)) return handType[2]
  if (isFullHouse(c)) return handType[3]
  if (isFlush(c)) return handType[4]
  if (isStraight(c)) return handType[5]
  if (isThreeCard(c)) return handType[6]
  if (isTwoPair(c)) return handType[7]
  if (isOnePair(c)) return handType[8]
  return handType[9]
}
