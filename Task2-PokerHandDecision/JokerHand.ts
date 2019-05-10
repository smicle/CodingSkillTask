import {range} from '../util/util'
import {InputCard as ic, PokerHand, handType} from './Type'

const jokerCount = (c: ic[]): number => c.filter(n => n.number === 0).length
const jokerOverlap = (c: ic[]): ic[] => c.filter(n => n.number !== 0)

// prettier-ignore
const duplicateNumber = (c: ic[], v: number): number =>
  c.map(n => n.number)
    .map((n, _, a) => a.filter(m => m === n).length)
    .filter(n => n === v).length

const isRoyal = (c: ic[]): boolean => {
  const n: number = [1, 13, 12, 11, 10].filter(v => c.map(n => n.number).indexOf(v) !== -1).length
  const l: number = jokerCount(c)
  return n + l === 5 ? true : false
}

const isRoyalFlush = (c: ic[]): boolean => isRoyal(c) && isFlush(c)

const isStraightFlush = (c: ic[]): boolean => isStraight(c) && isFlush(c)

const isFourCard = (c: ic[]): boolean => {
  const l: number = jokerCount(c)
  const d: ic[] = jokerOverlap(c)
  if (l === 2) return isThreeCard(d) || isOnePair(d)
  if (l === 1) return isFourCard(d) || isThreeCard(d)
  return duplicateNumber(c, 4) === 4
}

const isFullHouse = (c: ic[]): boolean => {
  const l: number = jokerCount(c)
  const d: ic[] = jokerOverlap(c)
  if (l === 1) return isTwoPair(d)
  return isThreeCard(d) && isOnePair(d)
}

// prettier-ignore
const isFlush = (c: ic[]): boolean =>
  c.map(n => n.suit)
    .sort((a, b) => a - b)
    .every((v, _, a) => v === 4 || v === a[0])

const isStraight = (c: ic[]): boolean => {
  if (isRoyal(c)) return true

  const l: number = jokerCount(c)
  if (l === 0) {
    const n: number[] = c.map(n => n.number).sort((a, b) => b - a)
    let f: number = n[0]
    return n.every(v => v === f--)
  }

  return range(5)
    .map(i => {
      const n: number[] = c
        .map(n => n.number)
        .filter(n => n !== 0)
        .sort((a, b) => b - a)
      n.splice(i, 0, 0)

      let f: number = n[0] === 0 ? n[1] : n[0]
      if (l === 1) return n.every(v => v === f-- || v === 0)

      return range(4 - i)
        .map(j => j + 1)
        .map(j => {
          const m: number[] = n.concat()
          m.splice(j + i, 0, 0)
          return m.every(v => v === f-- || v === 0)
        })
        .some(n => n)
    })
    .some(n => n)
}

const isThreeCard = (c: ic[]): boolean => {
  const l: number = jokerCount(c)
  const d: ic[] = jokerOverlap(c)
  if (l === 2) return true
  if (l === 1) return isOnePair(d)
  return duplicateNumber(c, 3) === 3
}

const isTwoPair = (c: ic[]): boolean => duplicateNumber(c, 2) === 4

const isOnePair = (c: ic[]): boolean => {
  const l: number = jokerCount(c)
  if (l === 1) return true
  return duplicateNumber(c, 2) === 2
}

export const isJoker = (c: ic[]): boolean => (jokerCount(c) === 0 ? false : true)

export const jokerHand = (c: ic[]): PokerHand => {
  if (isRoyalFlush(c)) return handType[0]
  if (isStraightFlush(c)) return handType[1]
  if (isFourCard(c)) return handType[2]
  if (isFullHouse(c)) return handType[3]
  if (isFlush(c)) return handType[4]
  if (isStraight(c)) return handType[5]
  if (isThreeCard(c)) return handType[6]
  if (isTwoPair(c)) return handType[7]
  if (isOnePair(c)) return handType[8]
  return handType[9]
}
