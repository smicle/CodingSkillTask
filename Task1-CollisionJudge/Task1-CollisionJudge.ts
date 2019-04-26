console.log('Task1-CollisionJudge')

// InputFunc
const rl: any = require('readline').createInterface(process.stdin, process.stdout)
const input = (): any => new Promise(r => rl.once('line', r))
;(async () => {
  // CreatType
  type Rect = {
    x: number
    y: number
    width: number
    height: number
  }

  // CreatFunc
  const range = (n: number): number[] => Array.from({length: n}, (_, i) => i)
  const splitInNumber = (s: string): number[] => s.split(' ').map((n: string) => Number(n))

  // SelfAircraft
  const s_raw: number[] = splitInNumber(await input())
  const self: Rect = {
    x: s_raw[0],
    y: s_raw[1],
    width: s_raw[2],
    height: s_raw[3],
  }

  // EnemyNumber
  const N: number = Number(await input())

  // EnemyAircraft
  const enemy: Rect[] = []
  for (const _ in range(N)) {
    const e_raw: number[] = splitInNumber(await input())
    enemy.push({
      x: e_raw[0],
      y: e_raw[1],
      width: e_raw[2],
      height: e_raw[3],
    })
  }

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

  process.exit()
})()

/* SampleCase
100 100 70 100
3
50 60 100 50
10 120 100 50
165 115 70 70
*/
