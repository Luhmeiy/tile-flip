<script lang="ts">
	import { Button, ButtonGroup, Grid } from '$lib';

	const [rows, cols] = [5, 5];

	const grid = $state(
		Array.from({ length: rows }, () => Array.from({ length: cols }, () => true))
	);

	let isGameWon = $state(false);

	const flipTiles = ({ direction, position }: { direction: string; position?: number }) => {
		if (typeof position === 'number') {
			if (direction === 'col') {
				for (let row of grid) {
					row[position] = !row[position];
				}
			} else if (direction === 'row') {
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
</script>

<div class="flex">
	<div class="flex flex-col gap-1">
		<ButtonGroup length={rows} direction="row" {flipTiles} />

		<Button flipTiles={() => flipTiles({ direction: 'diagonal' })} />
	</div>

	<div>
		<Grid {grid} />

		<div class="flex gap-1">
			<ButtonGroup length={cols} direction="col" {flipTiles} />
		</div>
	</div>
</div>
