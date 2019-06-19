import 'smicle-util'
import * as _util from 'smicle-util'

const field: number[] = _util.range(64).fill(0)

import {state} from '../Value'
console.log(state.flag)

const troutClick = (i: number) => {
  field[i] = field[i] == 0 ? 2 : field[i]
  state.flag = field[i]
}
