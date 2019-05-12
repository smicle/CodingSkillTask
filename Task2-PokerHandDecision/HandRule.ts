import {HandCard, PokerHand, getHandSuit, getHandNumber, hand_type} from './PokerType'
// import {createDeck} from './HandIO'

const numberDifference = (c: HandCard[]): string =>
  getHandNumber(c)
    .sort((a, b) => a - b)
    .map((_, i, a) => a[i + 1] - a[i])
    .join('')

const isFlush = (c: HandCard[]): boolean => getHandSuit(c).every(v => v === c[0].suit)
const isRoyal = (d: string): boolean => /9111/.test(d)
const isStraight = (d: string): boolean => /1111/.test(d)
const isFourCard = (d: string): boolean => /.000/.test(d)
const isFullHouse = (d: string): boolean => [/00.0/, /0.00/].some(r => r.test(d))
const isThreeCard = (d: string): boolean => [/00../, /.00./, /..00/].some(r => r.test(d))
const isTwoPair = (d: string): boolean => [/0.0./, /0..0/, /.0.0/].some(r => r.test(d))
const isOnePair = (d: string): boolean => [/0.../, /.0../, /..0./, /...0/].some(r => r.test(d))

const isHand = (c: HandCard[]): PokerHand => {
  const d: string = numberDifference(c)

  if (isFlush(c)) {
    if (isRoyal(d)) return hand_type[9]
    if (isStraight(d)) return hand_type[8]
    return hand_type[5]
  } else {
    if (isFourCard(d)) return hand_type[7]
    if (isFullHouse(d)) return hand_type[6]
    if (isRoyal(d) || isStraight(d)) return hand_type[4]
    if (isThreeCard(d)) return hand_type[3]
    if (isTwoPair(d)) return hand_type[2]
    if (isOnePair(d)) return hand_type[1]
  }
  return hand_type[0]
}

// const jokerCount = (c: HandCard[]): number => jokerPosition(c).length
// const jokerPosition = (c: HandCard[]): number[] => getHandNumber(c).filter(n => n === 0)

export const judgeHand = (c: HandCard[]): PokerHand => {
  // if (jokerCount(c) === 2) {
  // } else if (jokerCount(c) === 1) {
  //   const [a] = jokerPosition(c)
  //   const r: PokerHand[] = trumpInfo.map(t => {
  //     c[a].number = t.number
  //     c[a].suit = t.suit
  //     return isHand(c)
  //   })
  //   return hand_type[Math.max(...r.map(c => c.rank))]
  // }

  return isHand(c)
}
