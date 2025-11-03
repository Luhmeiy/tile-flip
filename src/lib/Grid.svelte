<script lang="ts">
	let {
		grid
	}: {
		grid: boolean[][];
	} = $props();
</script>

<div class="grid grid-cols-5 gap-1">
	{#each grid as row, i (i)}
		{#each row as cell, j (j)}
			<div class={`${cell ? 'bg-red' : 'bg-white'} h-20 aspect-square`}></div>
		{/each}
	{/each}
</div>
