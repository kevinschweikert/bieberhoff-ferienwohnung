<script>
import Gallery from "$lib/Gallery.svelte";
import Image from "$lib/Image.svelte";
import Lightbox from "$lib/Lightbox.svelte";

const items = Object.entries(
	import.meta.glob("$lib/images/gallerie/*.webp", {
		query: { enhanced: true },
		eager: true,
	}),
).map(([path, module]) => ({ path, src: module.default }));

let lightboxSrc = $state("");
</script>


<h1>Fotos</h1>

<Gallery>
	{#each items as { path, src } (path)}
		<button
			type="button"
			class="w-full p-0 border-0 bg-transparent cursor-zoom-in"
			onclick={() => (lightboxSrc = src.img.src)}
		>
			<Image {src} class="w-full aspect-[4/3] rounded-md" />
		</button>
	{/each}
</Gallery>

<Lightbox bind:src={lightboxSrc} />
