import 'smicle-util'
import * as _util from 'smicle-util'

import {paintTheTrout} from './PaintTheTrout'
import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher()

const field: number[] = _util.range(64).fill(0)

const troutClick = (i: number) => {
  if (field[i] != 0) return

  field[i] = field[i] == 0 ? 2 : field[i]
  paintTheTrout(i)
    .filter(n => field[n] == 0)
    .forEach(n => (field[n] = field[n] == 0 ? 1 : field[n]))

  // add()
}

// export let childCnt: any
// function add() {
//   childCnt++
//   dispatch('updateChild', {cnt: childCnt})
// }
