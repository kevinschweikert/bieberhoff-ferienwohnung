<script context="module">
	import Nav from '$lib/Nav.svelte';
</script>

<div class="main">
	<header>
		<a href="/" class="logo"><img src="/logo_white_text.webp" alt="Bieberhoff Logo" /></a>
		<Nav />
	</header>

	<div class="content">
		<slot />
	</div>

	<footer>
		<a class="menuitem" href="/kontakt">Kontakt</a>
		<a class="menuitem" href="/datenschutz">Datenschutz</a>
		<a class="menuitem" href="/impressum">Impressum</a>
	</footer>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
	}

	header {
		display: flex;
		background-color: var(--bieber);
		width: 100%;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
	}

	@media (min-width: 768px) {
		header {
			flex-direction: row;
			padding: 1.25rem;
			justify-content: space-between;
		}
	}

	.logo {
		flex-shrink: 0;
	}

	img {
		height: 7rem;
	}

	footer {
		background-color: var(--bieber);
		padding: 2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
