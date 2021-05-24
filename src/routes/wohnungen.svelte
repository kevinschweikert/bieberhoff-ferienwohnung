<script context="module">
	export const prerender = true;
	export const router = false;
	import ImageGrid from '$lib/ImageGrid.svelte';



	let grosse_wohnung = [
		'Gr_W_EssbereichKueche.webp',
		'Gr_W_Esstisch.webp',
		'Gr_W_Schlafzimmer.webp',
		'Gr_W_Kuschelecke.webp',
		'Gr_W_Bad.webp',
		'Gr_W_Dusche.webp'
	];

	let kleine_wohnung = [
		'Kl_W_Wohnzimmer2.webp',
		'Kl_W_Schlafzimmer.webp',
		'Kl_W_Bad.webp',
		'Kl_W_Dusche.webp',
		'Kl_W_Wohnzimmer1.webp'
	];
</script>

<style>

	.buttons {
		font-size: 1rem;
	}

		h2,
	h3,
	a {
		color: var(--bieber);
	}

	a {
		text-decoration: underline;
	}

	h2 {
		font-family: 'Courgette';
		font-weight: 700;
		font-size: 2rem;
		margin-top: 2rem;
	}

	h3 {
		font-family: 'Courgette';
		font-weight: 700;
		font-size: 1.5rem;
	}

	section {
		width: 100%;
	}

	.linklist {
		line-height: 3rem;
		list-style: none;
	}

	#leader {
		object-fit: cover;
		width: 100%;
		height: 10rem;
	}

	img {
		width: 100%;
	}
</style>

<div class="content">
	<h1>Wohnungen</h1>

	<ul class="linklist">
		<li><a class="buttons" href="#komplette_wohnung"> Komplette Wohnung</a></li>
		<li><a class="buttons" href="#kleine_wohnung"> Kleine Wohnung</a></li>
		<li><a class="buttons" href="#große_wohnung"> Große Wohnung</a></li>
	</ul>

	<section id="komplette_wohnung">
		<h2>Komplette Wohnung</h2>
		<img id="leader" src="/Begrüßung.webp" alt="Übersicht komplette Wohnung" />
			<p>
		Wir bieten eine gerade fertig gestellte und liebevoll gestaltete Wohnung mit ca. 90 qm und separatem Eingang an. Die gemütliche Wohnung ist flexibel nutzbar, etwa als Ganzes für eine Familie mit mehreren Kindern oder auch geteilt mit einem großen Bereich für die Kleinfamilie und einem weiteren Bereich für z.B. die Großeltern oder erwachsene Kinder. Die Wohnung ist selbstverständlich mit allem ausgestattet, was man für einen bequemen und erholsamen Urlaub braucht und zum großen Teil barrierefrei und rollstuhlgerecht.
	</p>
	</section>

	<section id="große_wohnung">
		<h2>Große Wohnung</h2>
		<img src="/Gr_W_gesamt2.webp" alt="Übersicht komplette Wohnung" />
		<ImageGrid images={grosse_wohnung} />
		<h3>Ausstattung</h3>
		<ul>
			<li>W-Lan</li>
			<li>Möbliert</li>
			<li>Voll ausgestattete Küche</li>
			<li>TV</li>
			<li>Nichtraucher</li>
			<li>Fußbodenheizung</li>
			<li>Parkplatz</li>
		</ul>

		<h3>Beschreibung</h3>
		<ul>
			<li>
				Ca. 55 qm-Erdgeschosswohnung für 2 bis 3 Personen (zusätzliches Kinderbett ist möglich).
			</li>
			<li>Großer Wohn-Essbereich mit integrierter voll ausgestatteter Küche und Sat-TV</li>
			<li>Schlafsofa (140 x 200 cm) in separater Ecke</li>
			<li>Großes barrierefreies Duschbad mit Handtuchheizkörper, Fön</li>
			<li>Separates Schlafzimmer mit 2 Betten (einzeln oder zusammen geschoben)</li>
			<li>Fußbodenheizung</li>
			<li>Wohnung barrierefrei (rollstuhlgerecht) mit separatem Eingang</li>
			<li>Zusätzliches Kinderbett möglich</li>
			<li>1. Hilfe-Set</li>
			<li>Haustier nach Absprache u.U. möglich</li>
			<li>Waschmaschinen- und Trocknernutzung möglich</li>
		</ul>

		<h3>Küche</h3>
		<ul>
			<li>Herd mit Backofen</li>
			<li>Kühlschrank (ohne Eisfach)</li>
			<li>Spülmaschine</li>
			<li>Mikrowelle</li>
			<li>Kaffeemaschine, Wasserkocher</li>
			<li>Toaster</li>
			<li>Radio</li>
			<li>Hochstuhl möglich</li>
		</ul>
	</section>

	<section id="kleine_wohnung">
		<h2>Kleine Wohnung</h2>
		<img class="test" src="/Kl_W_Schlafzimmer2.webp" alt="Übersicht komplette Wohnung" />
		<ImageGrid images={kleine_wohnung} />
		<h3>Ausstattung</h3>
		<ul>
			<li>W-Lan</li>
			<li>Möbliert</li>
			<li>Teil-ausgestattete Küche</li>
			<li>TV</li>
			<li>Nichtraucher</li>
			<li>Fußbodenheizung</li>
			<li>Parkplatz</li>
		</ul>

		<h3>Beschreibung</h3>
		<ul>
			<li>Ca. 35 qm-Erdgeschosswohnung für 2 bis 3 Personen (zusätzliches Kinderbett möglich)</li>
			<li>Separater Eingang</li>
			<li>
				Großzügiger Wohn-Essbereich mit integrierter teil-ausgestatteter Küche und Sat-TV, mit
				Schlafsofa (149 x 200cm)
			</li>
			<li>Schlaf-Empore mit Doppelbett (160 x 200 cm)</li>
			<li>Kleines Duschbad mit Handtuchheizkörper</li>
			<li>Fußbodenheizung</li>
			<li>Zusätzliches Kinderbett möglich</li>
			<li>1. Hilfe-Set</li>
			<li>Haustier nach Absprache u.U. möglich</li>
			<li>Waschmaschinen- und Trocknernutzung möglich</li>
		</ul>

		<h3>Küche (ohne Wasseranschluss)</h3>
		<ul>
			<li>Doppelkochplatte</li>
			<li>Tischgeschirrspüler (ohne Wasseranschluss nutzbar)</li>
			<li>Kühlschrank mit Eisfach</li>
			<li>Mikrowelle</li>
			<li>Kaffeemaschine, Wasserkocher</li>
			<li>Toaster</li>
			<li>Hochstuhl möglich</li>
		</ul>
	</section>
</div>