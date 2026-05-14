<script>
import { page } from "$app/state";
</script>

<svelte:head>
	<title>Fehler {page.status}</title>
</svelte:head>

<section class="flex flex-col items-center gap-4 p-8">
	<h1>Entschuldigung, Sie haben sich wohl verirrt.</h1>
	{#if page.error?.message}
		<p>{page.error.message}</p>
	{/if}
	<a
		class="rounded-md bg-bieber hover:bg-bieber/80 text-white px-4 py-2"
		href="/"
	>
		Zurück zur Startseite
	</a>
</section>
