import {InputCard} from './Type'

export const victoryOutput = (c_1p: InputCard[], c_2p: InputCard[], r_1p: number, r_2p: number) => {
  if (r_1p > r_2p) {
    console.log('1p WIN!!!')
    return
  } else if (r_2p > r_1p) {
    console.log('2p WIN!!!')
    return
  }

  const getfirstHand = (c: InputCard[]): InputCard => {
    const d: InputCard[] = c
      .map(v => ({suit: v.suit, number: v.number === 1 ? 14 : v.number}))
      .sort((a, b) => b.number - a.number)
    return d.filter(n => n === d[0]).sort((a, b) => b.suit - a.suit)[0]
  }

  const v_1p: InputCard = getfirstHand(c_1p)
  const v_2p: InputCard = getfirstHand(c_2p)

  if (v_1p.number > v_2p.number) {
    console.log('1p WIN!!!')
    return
  } else if (v_2p.number > v_1p.number) {
    console.log('2p WIN!!!')
    return
  }

  if (v_1p.suit > v_2p.suit) {
    console.log('1p WIN!!!')
  } else {
    console.log('2p WIN!!!')
  }
}
