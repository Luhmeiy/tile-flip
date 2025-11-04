<script lang="ts">
	let {
		grid,
		flipDirection
	}: {
		grid: boolean[][];
		flipDirection: string;
	} = $props();
</script>

<div class="grid grid-cols-5 gap-1">
	{#each grid as row, i (i)}
		{#each row as cell, j (j)}
			<div
				class={`relative h-20 preserve-3d transition-all duration-500 ${flipDirection === 'col' ? `delay-${100 * (grid.length - i - 1)}` : `delay-${100 * j}`}`}
				class:rotate-y-180={!cell}
			>
				<div class="absolute bg-red inset-0 rounded-lg backface-hidden"></div>
				<div
					class="absolute bg-white inset-0 rounded-lg rotate-y-180 backface-hidden"
				></div>
			</div>
		{/each}
	{/each}
</div>
