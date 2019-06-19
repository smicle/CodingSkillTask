<div class="centered">
  <main>
    <h1 class="title">8Queen</h1>
    <GameArea></GameArea>
  </main>
</div>


<script>
import GameArea from './components/GameArea/GameArea.svelte';
GameArea;
import { state } from './components/Value';
console.log(state.flag);
</script>
