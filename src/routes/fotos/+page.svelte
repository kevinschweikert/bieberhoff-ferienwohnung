<script>
import ImageGrid from "../../lib/ImageGrid.svelte";

const images = import.meta.glob("$lib/images/gallerie/*.webp", {
	query: {
		enhanced: true,
	},
	eager: true,
});
</script>

<h1>Fotos</h1>

<ImageGrid images={images} gallery_id="fotos" />
