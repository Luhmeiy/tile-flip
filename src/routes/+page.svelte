<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, ButtonGroup, Grid } from '$lib';

	const [rows, cols] = [5, 5];

	const grid = $state(
		Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
	);

	let isGameStarted = $state(false);
	let isGameWon = $state(false);

	let flipDirection = $state('col');
	let moves = $state(0);

	const startGame = () => {
		isGameStarted = false;

		const [min, max] = [4, 8];

		moves = Math.floor(Math.random() * (max - min + 1) + min);

		let usedDirections: string[] = [];
		let usedPosition: (number | undefined)[] = [];

		while (moves >= 0) {
			const direction = ['col', 'row', 'diagonal'][Math.floor(Math.random() * 3)];

			let position;

			if (direction === 'diagonal' && usedDirections.at(-1) === 'diagonal') continue;

			if (direction === 'col') {
				position = Math.floor(Math.random() * cols);
			} else if (direction === 'row') {
				position = Math.floor(Math.random() * rows);
			}

			if (direction === usedDirections.at(-1) && position === usedPosition.at(-1)) continue;

			flipTiles({ direction, position });

			usedDirections.push(direction);
			usedPosition.push(position);
			moves--;
		}

		isGameStarted = true;
	};

	const flipTiles = ({ direction, position }: { direction: string; position?: number }) => {
		if (typeof position === 'number') {
			if (direction === 'col') {
				flipDirection = 'col';

				for (let row of grid) {
					row[position] = !row[position];
				}
			} else if (direction === 'row') {
				flipDirection = 'row';

				grid[position] = grid[position].map((cell) => !cell);
			}
		} else {
			grid.map((row, index) => {
				const position = row.length - index - 1;
				row[position] = !row[position];
			});
		}

		isGameWon = grid.every((row) => row.every((value) => value === false));
	};

	$effect(() => {
		if (isGameWon) console.log('You win');
	});

	onMount(() => startGame());
</script>

<div class="relative flex">
	{#if isGameStarted}
		<div class="flex flex-col gap-1">
			<ButtonGroup length={rows} direction="row" {flipTiles} />

			<Button flipTiles={() => flipTiles({ direction: 'diagonal' })} />
		</div>

		<div>
			<Grid {grid} {flipDirection} />

			<div class="flex gap-1">
				<ButtonGroup length={cols} direction="col" {flipTiles} />
			</div>
		</div>
	{/if}

	{#if isGameWon}
		<div class="absolute -bottom-20 w-full flex flex-col items-center gap-2">
			<h2 class="text-4xl font-bold text-white">You won!</h2>

			<button
				class="bg-red font-semibold text-white px-4 py-2 rounded transition-colors duration-500 hover:bg-red/85"
				onclick={startGame}>Retry</button
			>
		</div>
	{/if}
</div>
