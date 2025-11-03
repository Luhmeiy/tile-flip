<script lang="ts">
	let {
		flipTiles
	}: {
		flipTiles: () => void;
	} = $props();
</script>

<div class="h-20 flex justify-center items-center aspect-square">
	<button class="h-6 bg-white rounded-full aspect-square" aria-label="button" onclick={flipTiles}
	></button>
</div>
