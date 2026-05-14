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

<article class="bg-bieber text-white rounded-xl shadow-md m-4 p-6 max-w-2xl">
	<a
		href="/wohnungen#{name.toLowerCase()}"
		class="inline-block hover:opacity-80 focus-visible:outline-white"
	>
		<h2 class="text-white mt-0 px-0">{name}</h2>
	</a>
	<div class="flex flex-wrap justify-between items-end gap-6">
		<div class="flex flex-col text-white/90">
			<span>{size} m²</span>
			<span>für {persons} Personen</span>
		</div>
		<div class="text-right">
			<div class="text-3xl md:text-4xl font-semibold">{price} €</div>
			<div class="text-sm text-white/80">/ Nacht</div>
			{#if new_price}
				<div class="mt-2 text-sm text-white/90">
					ab {new_price_from}: {new_price} €/Nacht
				</div>
			{/if}
		</div>
	</div>
</article>
