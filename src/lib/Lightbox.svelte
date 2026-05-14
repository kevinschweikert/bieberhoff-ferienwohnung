<script>
let { src = $bindable("") } = $props();
let dialog;

$effect(() => {
	if (src && dialog) dialog.showModal();
});
</script>

<dialog
	bind:this={dialog}
	onclick={() => dialog.close()}
	onclose={() => (src = "")}
	class="bg-transparent backdrop:bg-black/80 m-0 p-0 max-w-none max-h-none w-screen h-screen"
>
	{#if src}
		<div class="w-full h-full flex items-center justify-center p-4">
			<img {src} alt="" class="max-w-full max-h-full" />
		</div>
	{/if}
</dialog>
