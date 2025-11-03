<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Tile Flip</title>
</svelte:head>

<div class="w-dvw h-dvh bg-slate-6 flex justify-center items-center">
	{@render children()}
</div>
