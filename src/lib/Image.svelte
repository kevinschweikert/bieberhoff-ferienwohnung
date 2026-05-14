<script>
let {
	src,
	alt = "",
	loading = "lazy",
	class:
		className = "w-full max-w-[800px] h-72 md:h-96 rounded-lg shadow-md my-6 mx-4",
} = $props();
</script>

<enhanced:img
	{src}
	{alt}
	{loading}
	draggable="false"
	class="object-cover {className}"
/>
