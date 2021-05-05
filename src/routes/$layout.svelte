<script>
	import '../app.postcss';

	export const prerender = true;
</script>

<div class="flex flex-col h-screen">
	<header class="md:fixed bg-bieber-grün w-full flex md:flex-row items-center flex-col justify-between p-5 text-white md:space-x-3">
		<a href="/" class="flex-shrink-0"
			><img class="h-[7rem] min-w-full" src="/logo_white_text.webp" alt="Bieberhoff Logo" />
		</a>
		<nav class="flex flex-row space-x-6 p-6">
			<a href="/grosse-wohnung" class="hover:underline"> Große Wohnung </a>
			<a href="/kleine-wohnung" class="hover:underline"> Kleine Wohnung</a>
			<a href="https://bieberhoff.de" class="hover:underline"> Reittherapie</a>
		</nav>
	</header>
	

	<div class="md:mt-[9rem] flex-1">
		<slot />
	</div>

	<footer class="bg-bieber-grün p-5 text-white flex flex-row items-center justify-between space-x-3">
		<a href="/kontakt">Kontakt</a>
		<a href="/datenschutz">Datenschutz</a>
		<a href="/impressum">Impressum</a>
	</footer>
</div>
