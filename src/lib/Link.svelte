<script lang="ts">
const { children, path } = $props();
</script>
	<a class="text-white no-underline hover:underline" data-sveltekit-preload-data="hover" href={path}>{@render children()}</a>
