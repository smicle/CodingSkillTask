import * as readlineSync from 'readline-sync'
console.log('Task1-CollisionJudge')

/* SampleCase
100 100 70 100
3
50 60 100 50
10 120 100 50
165 115 70 70
*/

// CreatFunc
const input = (s = ''): string => readlineSync.question(s)
const range = (n: number): number[] => Array.from({length: n}, (_, i) => i)

// CreatType
type Rect = {
  x: number
  y: number
  width: number
  height: number
}

// SelfAircraft
// prettier-ignore
const s: number[] = input().split(' ').map((n: string) => Number(n))
const self: Rect = {
  x: s[0],
  y: s[1],
  width: s[2],
  height: s[3],
}

// EnemyNumber
const N: number = Number(input())

// EnemyAircraft
// prettier-ignore
const enemy: Rect[] = [...range(N)]
  .map(_ => input().split(' ').map((n: string) => Number(n)))
  .map(e => ({
    x: e[0],
    y: e[1],
    width: e[2],
    height: e[3],
  }))

// CollisionJudge
enemy.forEach((e, i) => {
  const judge_x: number = Math.abs(self.x - e.x)
  const judge_y: number = Math.abs(self.y - e.y)
  const judge_width: number = self.width / 2 + e.width / 2
  const judge_height: number = self.height / 2 + e.height / 2
  if (judge_x < judge_width && judge_y < judge_height) {
    console.log(`敵機${i + 1}が当たり`)
  }
})
