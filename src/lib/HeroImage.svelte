<script>
import Image from "$lib/Image.svelte";
let { alt, src } = $props();
</script>

<Image
	{src}
	{alt}
	loading="eager"
	class="w-screen h-[220px] md:h-[380px]"
/>
