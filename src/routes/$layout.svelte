<script>
	import '../app.postcss';
</script>

<div class="flex flex-col h-screen">
	<nav class="fixed bg-bieber-grün w-full flex justify-between p-5 text-white">
		<div>
			<a href="/"><img class="h-20" src="/logo_white_text.png" alt="Logo" /></a>
		</div>
		<ul class="flex flex-row">
			<li class="pr-5"><a href="/grosse-wohnung"> Große Wohnung </a></li>
			<li class="pr-5"><a href="/kleine Wohnung"> Kleine Wohnung</a></li>
		</ul>
	</nav>

	<div class="md:w-[800px] mt-[10rem] mx-auto p-5 flex-1">
		<slot />
	</div>

	<footer class="bg-gray-500 p-5 text-white">Footer</footer>
</div>
