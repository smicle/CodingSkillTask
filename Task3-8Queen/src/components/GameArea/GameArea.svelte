{#each field as f, i}
  <div id="t-{i}" class="trout" flag={f} on:click|once={_ => troutClick(i)}></div>
  {#if (i + 1) % 8 == 0}<br>{/if}
{/each}
