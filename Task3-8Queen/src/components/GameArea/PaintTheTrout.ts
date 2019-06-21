import 'smicle-util'

export const paintTheTrout = (N: number): number[] => {
  const a: number[] = []

  for (let n = ((N / 8) | 0) * 8, i = 0; i < 8; i++) {
    a.push(n + i)
  }

  for (let n = N % 8, i = 0; i < 8; n += 8, i++) {
    a.push(n)
  }

  for (let n = N; n < 64; n += 9) {
    a.push(n)
    if (n % 8 == 7) break
  }

  for (let n = N; n >= 0; n -= 9) {
    a.push(n)
    if (n % 8 == 0) break
  }

  for (let n = N; n >= 0; n -= 7) {
    a.push(n)
    if (n % 8 == 7) break
  }

  for (let n = N; n < 64; n += 7) {
    a.push(n)
    if (n % 8 == 0) break
  }

  return a._uniq()
}
