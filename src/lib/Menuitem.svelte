<script lang="ts">
const { children, path } = $props();
</script>
	<a class="text-white no-underline hover:underline m-0.5 p-3 rounded-md bg-black/10" data-sveltekit-preload-data="hover" href={path}>{@render children()}</a>

