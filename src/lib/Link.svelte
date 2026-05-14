<script>
const { children, path } = $props();
</script>

<a
	class="text-white underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-white"
	data-sveltekit-preload-data="hover"
	href={path}
>
	{@render children()}
</a>
