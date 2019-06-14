<h1>
  8Queen
  <GameArea></GameArea>
  {test}
</h1>


<script>
import 'smicle-util';
import * as _util from 'smicle-util';
import GameArea from './components/GameArea/GameArea.svelte';
GameArea;
export var test = _util.range(100)._remove(5, 10, 15);
</script>


<style>
h1 {
  color: purple; }
</style>
