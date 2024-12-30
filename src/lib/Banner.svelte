<script>
	let { children, title } = $props();
</script>

<div class="bg-bieber text-white w-screen flex flex-col items-center">
	<h3 class="text-white">{title}</h3>
	{@render children()}
</div>
