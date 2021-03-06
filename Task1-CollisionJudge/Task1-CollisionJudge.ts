import * as util from 'smicle-util'

type Rect = {
  x: number
  y: number
  width: number
  height: number
}

console.log('Task1-Collisionis')

// prettier-ignore
const s: number[] = util.input().split(' ').map(Number)
const self: Rect = {
  x: s[0],
  y: s[1],
  width: s[2],
  height: s[3],
}

const n: number = util.input()._num()
// prettier-ignore
const enemy: Rect[] = util.range(n)
  .map(_ => util.input().split(' ').map(Number))
  .map(e => ({
    x: e[0],
    y: e[1],
    width: e[2],
    height: e[3],
  }))

enemy.forEach((e, i) => {
  const is_x: number = Math.abs(self.x - e.x)
  const is_y: number = Math.abs(self.y - e.y)
  const is_width: number = self.width / 2 + e.width / 2
  const is_height: number = self.height / 2 + e.height / 2

  if (is_x < is_width && is_y < is_height) {
    console.log(`敵機${i + 1}が当たり`)
  }
})

/* SampleCase
100 100 70 100
3
50 60 100 50
10 120 100 50
165 115 70 70
*/
