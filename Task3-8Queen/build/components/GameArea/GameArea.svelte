{#each field as f, i}
  <div id="t-{i}" class="trout" flag={f} on:click|once={_ => troutClick(i)}></div>
  {#if (i + 1) % 8 == 0}<br>{/if}
{/each}


<script>
import 'smicle-util';
import * as _util from 'smicle-util';
import { paintTheTrout } from './PaintTheTrout';
import { createEventDispatcher } from 'svelte';
var dispatch = createEventDispatcher();
var field = _util.range(64).fill(0);
var troutClick = function (i) {
    if (field[i] != 0)
        return;
    field[i] = field[i] == 0 ? 2 : field[i];
    paintTheTrout(i)
        .filter(function (n) { return field[n] == 0; })
        .forEach(function (n) { return (field[n] = field[n] == 0 ? 1 : field[n]); });
    // add()
};
// export let childCnt: any
// function add() {
//   childCnt++
//   dispatch('updateChild', {cnt: childCnt})
// }
</script>
