import '../util/Prototype'

export type HandCard = {
  suit: number
  number: number
}
export type DisplayCard = {
  suit: string
  number: string
}
export type PokerHand = {
  rank: number
  hand: string
}

export const getHandSuit = (c: HandCard[]): number[] => c.map(n => n.suit)
export const getHandNumber = (c: HandCard[]): number[] => c.map(n => n.number)

export const hand_type: PokerHand[] = [
  {rank: 0, hand: 'High card'},
  {rank: 1, hand: 'One Pair'},
  {rank: 2, hand: 'Two Pair'},
  {rank: 3, hand: 'Three Card'},
  {rank: 4, hand: 'Straight'},
  {rank: 5, hand: 'Flush'},
  {rank: 6, hand: 'Full House'},
  {rank: 7, hand: 'Four Card'},
  {rank: 8, hand: 'Straight Flush'},
  {rank: 9, hand: 'Royal Flush'},
]
