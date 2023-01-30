<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	export let gallery_id;
	export let images = [];

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + gallery_id,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery" id={gallery_id}>
	{#each images as image}
		<a
			href={image.src}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			data-cropped="true"
			target="_blank"
			rel="noreferrer"
		>
			<img loading="lazy" src={image.thumbnail} alt="" />
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
