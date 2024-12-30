<script>
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	let { gallery_id, images, title } = $props();

	const processedImages = Array.isArray(images)
		? images
		: typeof images === "string"
			? [{ path: gallery_id, module: { default: images } }]
			: Object.entries(images).map(([path, module]) => ({ path, module }));
</script>

<Splide
	options={{
		//type: "loop",
		focus: "center",
		keyboard: true,
		gap: "1rem",
	}}
>
	{#if title}
		<SplideSlide>
			<enhanced:img
				class="object-cover rounded-md h-100 md:h-150"
				src={title}
				alt=""
			/>
		</SplideSlide>
	{/if}
	{#each processedImages as { path, module }}
		<SplideSlide>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href={module.default.img.src}>
				<enhanced:img
					loading="lazy"
					class="object-cover rounded-md h-100 md:h-150"
					src={module.default}
					alt=""
				/>
			</a>
		</SplideSlide>
	{/each}
</Splide>
