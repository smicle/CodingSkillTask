import {InputCard} from './Type'

export const victoryOutput = (c: InputCard[][], r: number[]) => {
  const [r_1p, r_2p] = r
  if (r_1p > r_2p) {
    console.log('1p WIN!!!')
    return
  } else if (r_2p > r_1p) {
    console.log('2p WIN!!!')
    return
  }

  const [c_1p, c_2p] = c.map(n =>
    n
      .map(v => ({suit: v.suit, number: v.number === 1 ? 14 : v.number}))
      .sort((a, b) => b.number - a.number)
  )
  const v_1p: InputCard = c_1p.filter(n => n === c_1p[0]).sort((a, b) => b.suit - a.suit)[0]
  const v_2p: InputCard = c_2p.filter(n => n === c_2p[0]).sort((a, b) => b.suit - a.suit)[0]

  if (v_1p.number > v_2p.number) {
    console.log('1p WIN!!!')
    return
  } else if (v_2p.number > v_1p.number) {
    console.log('2p WIN!!!')
    return
  }

  if (v_1p.suit > v_2p.suit) {
    console.log('1p WIN!!!')
  } else if (v_2p.suit > v_1p.suit) {
    console.log('2p WIN!!!')
  }

  console.log('DRAW')
}
