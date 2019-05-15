import * as readlineSync from 'readline-sync'

declare global {
  interface Array<T> {
    count(n: number): number
  }
}

Array.prototype.count = function(n: number): number {
  return this.filter(v => v == n).length
}

export const input = (s = ''): string => readlineSync.question(s)
export const range = function(start: number, stop = 0, step = 1): number[] {
  switch (arguments.length) {
    case 1:
      return Array.from(Array(start), (_, i) => i)
    case 2:
      const n = -start + stop
      return Array.from(Array(n < 0 ? 0 : n), _ => start++)
    case 3:
      if (step > 0) {
        const n = -start + stop
        return Array.from(Array(n < 0 ? 0 : n), _ => start++).filter((_, i) => i % step == 0)
      } else if (step < 0) {
        const n = start + -stop
        return Array.from(Array(n < 0 ? 0 : n), _ => start--).filter((_, i) => i % step == 0)
      } else {
        console.error(Error('range() arg 3 must not be zero'))
      }
  }
  return []
}

// range
// https://docs.python.org/ja/3/library/stdtypes.html?highlight=range#range
// console.log(range(10))
// console.log(range(10, 20))
// console.log(range(-10, 10))
// console.log(range(10, 20, 3))
// console.log(range(-10, 10, 3))
// console.log(range(-10, -20, -1))
// console.log(range(10, -10, -1))
// console.log(range(-10, -20, -3))
// console.log(range(10, -10, -3))
// console.log(range(0))
// console.log(range(1, 0))
// console.log(range(0, 1, -1))
// console.log(range(0, 0, 0))
