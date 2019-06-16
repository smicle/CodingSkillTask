{#each field as i}
  <div id="t-{i}" class="trout"></div>
  {#if i % 8 == 0}<br>{/if}
{/each}
