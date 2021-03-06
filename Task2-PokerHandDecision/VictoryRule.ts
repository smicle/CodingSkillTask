import {HandCard, PokerHand, getHandSuit} from './PokerType'

const isSuit = (c: HandCard[][]): number[] =>
  // prettier-ignore
  c.map(v =>
    -getHandSuit(v)
      .sort((a, b) => a - b)
      ._first()
  )

const getHandNumber = (c: HandCard[]): number[] =>
  c
    .map(n => n.number)
    .map(n => (n === 1 ? 14 : n))
    .sort((a, b) => b - a)

const isNCard = (c: HandCard[][]): number[] =>
  c.map(v =>
    getHandNumber(v)
      ._overlap()
      ._first()
  )

const isFullHouse = (c: HandCard[][]): number[] =>
  // prettier-ignore
  c.map(v => {
    const n = getHandNumber(v)
    const f = n._first(), l = n._last()
    return (
      n.includes(0)
        ? n._overlap()._first()
        : n._count(f) === 3 ? f : l
    )
  })

const isOnePair = (c: HandCard[][]): number[] =>
  c.map(v => {
    const n = getHandNumber(v)
    return n.includes(0) ? n._first() : n._overlap()._first()
  })

const isBigNumber = (c: HandCard[][]): number[] => c.map(v => getHandNumber(v)._first())

const fightNumber = (c: number[]): string =>
  c[0] > c[1] ? '1p WIN!!!' : c[0] < c[1] ? '2p WIN!!!' : 'Draw'

export const victoryResult = (result_hand: PokerHand[], second_hand: HandCard[][]): string => {
  const [r1, r2] = result_hand.map(r => r.rank)
  // prettier-ignore
  return (
    r1 > r2 ? '1p WIN!!!' :
    r2 > r1 ? '2p WIN!!!' :
    fightNumber(
      r1 === 9 ? isSuit(second_hand) :      // Royal Flush
      r1 === 8 ? isBigNumber(second_hand) : // Straight Flush
      r1 === 7 ? isNCard(second_hand) :     // Four Card
      r1 === 6 ? isFullHouse(second_hand) : // Full House
      r1 === 5 ? isSuit(second_hand) :      // Flush
      r1 === 4 ? isBigNumber(second_hand) : // Straight
      r1 === 3 ? isNCard(second_hand) :     // Three Card
      r1 === 2 ? isNCard(second_hand) :     // Two Pair
      r1 === 1 ? isOnePair(second_hand) :   // One Pair
      isBigNumber(second_hand)              // High card
    )
  )
}
