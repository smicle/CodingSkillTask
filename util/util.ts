import * as readlineSync from 'readline-sync'
export const input = (s = ''): string => readlineSync.question(s)
export const range = (n: number): number[] => Array.from({length: n}, (_, i) => i)
