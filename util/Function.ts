import * as readlineSync from 'readline-sync'

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
        process.exit(1)
      }
  }
  return []
}
