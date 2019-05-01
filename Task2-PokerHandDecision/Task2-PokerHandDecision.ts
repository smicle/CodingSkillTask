import * as readlineSync from 'readline-sync'
console.log('Task2-PokerHandDecision')

/* SampleCase
0 01
3 06
3 10
3 01
1 01
*/

// CreatFunc
const input = (s = ''): string => readlineSync.question(s)
const range = (n: number): number[] => Array.from({length: n}, (_, i) => i)

// CreatType
type RawTrump = {
  suit: number
  num: number
}
type CompleteTrump = {
  suit: string
  num: string
}

// prettier-ignore
const raw_card: RawTrump[] = [...range(5)]
  .map(_ => input().split(' ').map(n => Number(n)))
  .map(c => ({
    suit: c[0],
    num: c[1],
  }))

// ConvertCard
// prettier-ignore
const convertSuit = (n: number): string =>
  n == 0 ? 'S' :
  n == 1 ? 'C' :
  n == 2 ? 'D' :
  n == 3 ? 'H' :
  ''
// prettier-ignore
const convertPattern = (n: number): string =>
  n ==  1 ? 'A' :
  n == 11 ? 'J' :
  n == 12 ? 'Q' :
  n == 13 ? 'K' :
  String(n)

const complete_card: CompleteTrump[] = raw_card.map(c => ({
  suit: convertSuit(c.suit),
  num: convertPattern(c.num),
}))

console.log(complete_card)
