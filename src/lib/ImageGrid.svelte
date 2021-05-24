<script context="module">
	export const prerender = true;
</script>

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
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;
		align-content: flex-end;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	a {
		width: calc((100% - 1rem)/3);
	}

	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}
</style>
