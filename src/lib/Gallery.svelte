<script>
let { children } = $props();
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl w-full mx-auto p-4"
>
	{@render children()}
</div>
