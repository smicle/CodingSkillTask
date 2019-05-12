import {HandCard} from './PokerType'

export const victoryResult = (c_1p: HandCard[], c_2p: HandCard[], r_1p: number, r_2p: number) => {
  if (r_1p > r_2p) {
    console.log('1p WIN!!!')
    return
  } else if (r_2p > r_1p) {
    console.log('2p WIN!!!')
    return
  }

  const getfirstHand = (c: HandCard[]): HandCard => {
    const d: HandCard[] = c
      .map(v => ({suit: v.suit, number: v.number === 1 ? 14 : v.number}))
      .sort((a, b) => b.number - a.number)
    return d.filter(n => n === d[0]).sort((a, b) => b.suit - a.suit)[0]
  }

  const v_1p: HandCard = getfirstHand(c_1p)
  const v_2p: HandCard = getfirstHand(c_2p)

  if (v_1p.number > v_2p.number) {
    console.log('1p WIN!!!')
    return
  } else if (v_2p.number > v_1p.number) {
    console.log('2p WIN!!!')
    return
  }

  console.log('DRAW')
}
