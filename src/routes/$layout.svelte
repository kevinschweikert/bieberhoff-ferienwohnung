<script>
	import '../app.postcss';
</script>

<nav class="fixed bg-bieber-grün w-full z-50 flex justify-between p-5 text-white">
	<div>
		<a href="/">Logo</a>
	</div>
	<ul class="flex flex-row">
		<li class="pr-5"><a href="/grosse-wohnung"> Große Wohnung </a></li>
		<li class="pr-5"><a href="/kleine Wohnung"> Kleine Wohnung</a></li>
	</ul>
</nav>
<div class="flex flex-col mt-20 w-screen">

    <div class="md:w-[800px] mx-auto">
        <slot />
    </div>
    
    <footer class="bg-gray-500 p-5 text-white">Footer</footer>
</div>
