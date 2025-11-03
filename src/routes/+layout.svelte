<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Tile Flip</title>
</svelte:head>

<div>
	{@render children()}
</div>
