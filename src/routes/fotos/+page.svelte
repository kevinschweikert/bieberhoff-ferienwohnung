<script>
	import ImageGrid from '../../lib/ImageGrid.svelte';

	const images = import.meta.glob('../../images/gallerie/*.webp', {
		query: {
			width: '300;1200',
			picture: '',
			flatten: '',
			meta: true
		},
		import: 'default',
		eager: true
	});

	let list = [];

	for (const path in images) {
		let image = images[path];
		list.push({
			width: image.fallback.w,
			height: image.fallback.h,
			src: image.sources.webp[1].src,
			thumbnail: image.sources.webp[0].src
		});
	}
</script>

<h1>Fotos</h1>

<ImageGrid images={list} gallery_id="fotos" />
