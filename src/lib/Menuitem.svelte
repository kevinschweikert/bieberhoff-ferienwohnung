<script>
const { children, path } = $props();
</script>

<a
	class="text-white px-3 py-2 rounded-md hover:bg-white/15 active:bg-white/25 focus-visible:outline-white"
	data-sveltekit-preload-data="hover"
	href={path}
>
	{@render children()}
</a>
