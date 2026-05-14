<script>
let { children, title } = $props();
</script>

<aside
	class="w-screen bg-bieber text-white my-8 py-6 px-4 flex flex-col items-center"
>
	<h3 class="text-white mt-0 mb-2">{title}</h3>
	<div class="max-w-prose">
		{@render children()}
	</div>
</aside>
