<script>
let {
	name = "",
	price = 0,
	size = 0,
	persons = "",
	new_price = false,
	new_price_from = "",
} = $props();
</script>

<div class="bg-bieber p-4 rounded-md text-white flex flex-col gap-3 mb-2">
	<a href="/wohnungen#{name.toLowerCase()}"><h2 class="text-white">{name}</h2></a>
	<div class="flex flex-row flex-wrap justify-between gap-6">
		<div class="flex flex-col">
			<span>{size} m²</span>
			<span>für {persons} Personen</span>
		</div>
		<div>
			<div class="text-3xl">{price} €/Nacht</div>
			{#if new_price}
				<div>ab {new_price_from} - {new_price} €/Nacht</div>
			{/if}
		</div>
	</div>
</div>

