<script>
	import ImageGrid from "../../lib/ImageGrid.svelte";

	const images = import.meta.glob("$lib/images/gallerie/*.webp", {
		query: {
			enhanced: true,
		},
		eager: true,
	});
</script>

<section class="p-4">
	<h1>Fotos</h1>

	<ImageGrid {images} gallery_id="fotos" />
</section>
