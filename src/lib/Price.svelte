<script>
	export let name = '';
	export let price = 0;
	export let size = 0;
	export let persons = '';
</script>

<div class="container">
	<h2>{name}</h2>
	<div class="tabelle">
		<div class="facts">
			<span>{size} m²</span>
			<span>für {persons} Personen</span>
		</div>
		<div class="price">{price} €/Nacht</div>
	</div>
</div>

<style>
	.container {
		background-color: var(--bieber);
		padding: 1em;
		margin: 0.5rem 0;
		border-radius: 0.5em;
		color: white;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.price {
		font-size: 2rem;
	}

	.facts {
		display: flex;
		flex-direction: column;
	}

	.tabelle {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		gap:  0.75rem;
	}

	h2 {
		color: white;
		padding: 0;
		margin: 0;
		font-weight: 200;
		font-family: 'Roboto Slab', sans-serif;
	}
</style>
