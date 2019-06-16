{#each field as i}
  <div id="t-{i}" class="trout"></div>
  {#if i % 8 == 0}<br>{/if}
{/each}


<script>
import 'smicle-util';
import * as _util from 'smicle-util';
var field = _util.range(1, 65);
</script>
