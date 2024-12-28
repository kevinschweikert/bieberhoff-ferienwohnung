<script>
	import Menuitem from "$lib/Menuitem.svelte";
	import Link from "$lib/Link.svelte";

	import logo from "$lib/images/logo_white_text.webp?enhanced";

	import "../app.css";

	import "@fontsource-variable/roboto-slab";
	import "@fontsource/courgette";

	const routes = [
		{ path: "/", name: "Startseite" },
		{ path: "/wohnungen", name: "Wohnungsoptionen" },
		{ path: "/preise-optionen", name: "Preise und Optionen" },
		{ path: "/umgebung", name: "Umgebung und Freizeit" },
		{ path: "/fotos", name: "Fotos" },
		{ path: "/kontakt", name: "Kontakt" },
		{ path: "https://bieberhoff.de", name: "Reittherapie" },
	];
</script>

<div class="flex flex-col h-screen">
	<header
		class="flex md:flex-row flex-col items-center md:p-5 md:justify-between p-4 bg-bieber"
	>
		<a href="/" class="shrink-0" aria-label="Logo">
			<enhanced:img src={logo} alt="Bieberhoff Logo" class="w-50" />
		</a>
		<nav class="flex flex-row gap-2 flex-wrap items-center p-2 md:justify-end">
			{#each routes as route}
				<Menuitem path={route.path}>{route.name}</Menuitem>
			{/each}
		</nav>
	</header>

	<div class="content flex flex-col items-center flex-1">
		<slot />
	</div>

	<footer class="flex flex-row items-center justify-between p-4 bg-bieber">
		<Link path="/kontakt">Kontakt</Link>
		<Link path="/datenschutz">Datenschutz</Link>
		<Link path="/impressum">Impressum</Link>
	</footer>
</div>
