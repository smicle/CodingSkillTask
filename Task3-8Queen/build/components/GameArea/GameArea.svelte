{#each field as f, i}
  <div id="t-{i}" class="trout" flag={f} on:click|once={_ => troutClick(i)}></div>
  {#if (i + 1) % 8 == 0}<br>{/if}
{/each}


<script>
import 'smicle-util';
import * as _util from 'smicle-util';
var field = _util.range(64).fill(0);
import { state } from '../Value';
console.log(state.flag);
var troutClick = function (i) {
    field[i] = field[i] == 0 ? 2 : field[i];
    state.flag = field[i];
};
</script>
