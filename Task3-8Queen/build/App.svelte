<div class="centered">
  <main>
    <h1 class="title">8Queen</h1>
    <GameArea></GameArea>
    <!-- <GameArea childCnt={childCnt} on:updateChild={updateChild}></GameArea> -->
    <!-- Queenの数：{childCnt} -->
  </main>
</div>


<script>
import GameArea from './components/GameArea/GameArea.svelte';
GameArea;
// let childCnt = 0
// function updateChild(event) {
//   childCnt = event.detail.cnt
// }
</script>
