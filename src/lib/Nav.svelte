<nav>
	<a class="menuitem" data-sveltekit-preload-data="hover" href="/">Startseite</a>
	<a class="menuitem" data-sveltekit-preload-data="hover" href="/wohnungen">Wohnungsoptionen</a>
	<a class="menuitem" data-sveltekit-preload-data="hover" href="/preise-optionen"
		>Preise und Optionen</a
	>
	<a class="menuitem" data-sveltekit-preload-data="hover" href="/umgebung">
		Umgebung und Freizeit</a
	>
	<a class="menuitem" data-sveltekit-preload-data="hover" href="/fotos">Fotos</a>
	<a class="menuitem" data-sveltekit-preload-data="hover" href="/kontakt"> Kontakt</a>
	<a class="menuitem" data-sveltekit-preload-data="hover" href="https://bieberhoff.de">
		Reittherapie</a
	>
</nav>

<style>
	nav {
		gap: 0.5rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		padding: 0.5em;
	}

	@media (min-width: 768px) {
		nav {
			justify-content: flex-end;
		}
	}

	a {
		background-color: rgba(0, 0, 0, 0.1);
		padding: 0.75rem;
		border-radius: 0.5em;
		margin: 0.1rem;
	}
</style>
