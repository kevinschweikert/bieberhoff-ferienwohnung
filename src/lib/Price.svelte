<script>
	export let name = '';
	export let price = 0;
	export let size = 0;
	export let persons = '';
	export let new_price = false;
	export let new_price_from = '';
</script>

<div class="container">
	<a href="/wohnungen#{name.toLowerCase()}"><h2>{name}</h2></a>
	<div class="tabelle">
		<div class="facts">
			<span>{size} m²</span>
			<span>für {persons} Personen</span>
		</div>
		<div>
			<div class="price">{price} €/Nacht</div>
			{#if new_price}
				<div>ab {new_price_from} - {new_price} €/Nacht</div>
			{/if}
		</div>
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
		gap: 0.75rem;
	}

	h2 {
		color: white;
		padding: 0;
		margin: 0;
		font-weight: 200;
		font-family: 'Roboto Slab', sans-serif;
	}

	a {
		text-decoration: none;
	}
</style>
