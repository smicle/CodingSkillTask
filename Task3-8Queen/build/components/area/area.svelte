<button on:click={toggle}>{color}</button>
<div class="area" style="background-color: {color}"></div>


<script>
export var color = 'red';
var toggle = function () { return (color = color === 'red' ? 'blue' : 'red'); };
</script>
