<script>
	export let images = [];
</script>

<div>
	{#each images as image}
		<a href="/{image}">
			<img src="/{image}" alt={image} />
		</a>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 0.25rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	img {
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 0.5em;
	}
</style>
