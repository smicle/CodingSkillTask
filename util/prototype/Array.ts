import {range} from '../Function'

declare global {
  interface Array<T> {
    _empty(): boolean
    _equal(a: any[]): boolean
    _count(n: number): number
    _uniq(): any[]
    _overlap(): any[]
    _first(n?: number): any | any[]
    _last(n?: number): any | any[]
    _clear(): any[]
    _remove(...n: number[]): any | any[]
  }
}

Array.prototype._empty = function(): boolean {
  return this.length === 0
}

Array.prototype._equal = function(a: any[]): boolean {
  return JSON.stringify(this) === JSON.stringify(a)
}

Array.prototype._count = function(n) {
  return this.filter(v => v == n).length
}

Array.prototype._uniq = function(): any[] {
  const l = Array.from(new Set(this))
  this._clear()
  l.forEach((v, i) => (this[i] = v))
  return this
}

Array.prototype._overlap = function(): any[] {
  const l = this.filter((n, i, a) => a.indexOf(n) === i && i !== a.lastIndexOf(n))
  this._clear()
  l.forEach((v, i) => (this[i] = v))
  return this
}

Array.prototype._first = function(n = 1): any | any[] {
  if (n === 1) {
    return this[0]
  } else {
    return range(n).map(i => this[i])
  }
}

Array.prototype._last = function(n = 1): any | any[] {
  const a = this.concat()
  if (n === 1) {
    return a.pop()
  }
  // prettier-ignore
  return a.reverse()._first(n).reverse()
}

Array.prototype._clear = function(): any[] {
  this.length = 0
  return this
}

Array.prototype._remove = function(...n: number[]): any | any[] {
  if (n.length === 1) {
    return this.splice(n[0], 1)._first()
  } else {
    return n.map(v => this.splice(v, 1)._first())
  }
}
