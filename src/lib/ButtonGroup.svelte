<script lang="ts">
	import Button from './Button.svelte';

	let {
		length,
		direction,
		flipTiles
	}: {
		length: number;
		direction: string;
		flipTiles: ({ direction, position }: { direction: string; position?: number }) => void;
	} = $props();
</script>

{#each { length } as _, i}
	<Button flipTiles={() => flipTiles({ direction, position: i })} />
{/each}
