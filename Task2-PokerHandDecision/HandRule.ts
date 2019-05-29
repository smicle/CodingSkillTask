import {HandCard, PokerHand, getHandSuit, getHandNumber, hand_type} from './PokerType'
import {createDeck} from './HandIO'

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
  const n: string = numberDifference(c)

  if (isFlush(c)) {
    // Royal Flush
    if (isRoyal(n)) return hand_type[9]
    // Straight Flush
    if (isStraight(n)) return hand_type[8]
    // Flush
    return hand_type[5]
  } else {
    // Four Card
    if (isFourCard(n)) return hand_type[7]
    // Full House
    if (isFullHouse(n)) return hand_type[6]
    // Straight
    if (isRoyal(n) || isStraight(n)) return hand_type[4]
    // Three Card
    if (isThreeCard(n)) return hand_type[3]
    // Two Pair
    if (isTwoPair(n)) return hand_type[2]
    // One Pair
    if (isOnePair(n)) return hand_type[1]
  }
  // High card
  return hand_type[0]
}

const isJoker = (c: HandCard[]): boolean => getHandNumber(c).some(n => n === 0)

export const judgeHand = (c: HandCard[]): PokerHand => {
  if (isJoker(c)) {
    const d: HandCard[] = c.concat()
    d.sort((a, b) => b.number - a.number).pop()

    const rank: number[] = createDeck()
      .filter(a => d.findIndex(b => a._equal(b)) === -1)
      .map(v => isHand([...d, v]))
      .map(v => v.rank)
    return hand_type[Math.max(...rank)]
  }

  return isHand(c)
}
