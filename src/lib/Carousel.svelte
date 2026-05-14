<script>
import Image from "$lib/Image.svelte";
import Lightbox from "$lib/Lightbox.svelte";

let { images, title } = $props();

const items = $derived(
	Object.entries(images).map(([path, module]) => ({
		path,
		src: module.default,
	})),
);

let lightboxSrc = $state("");
</script>

<div
	class="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth max-w-4xl w-full mx-auto p-4"
>
	{#if title}
		<Image
			src={title}
			class="h-100 md:h-150 w-full rounded-md snap-center shrink-0"
		/>
	{/if}
	{#each items as { path, src } (path)}
		<button
			type="button"
			class="snap-center shrink-0 w-full p-0 border-0 bg-transparent cursor-zoom-in"
			onclick={() => (lightboxSrc = src.img.src)}
		>
			<Image {src} class="h-100 md:h-150 w-full rounded-md" />
		</button>
	{/each}
</div>

<Lightbox bind:src={lightboxSrc} />
