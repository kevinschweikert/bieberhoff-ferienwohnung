<script context="module">
	import ImageGrid from '$lib/ImageGrid.svelte';

	let ganze_wohnung = [
		'Gr_W_EssbereichKueche.webp',
		'Gr_W_Esstisch.webp',
		'Gr_W_Schlafzimmer.webp',
		'Gr_W_Kuschelecke.webp',
		'Gr_W_Bad.webp',
		'Gr_W_Dusche.webp',
		'Kl_W_Wohnzimmer2.webp',
		'Kl_W_Schlafzimmer.webp',
		'Kl_W_Wohnzimmer1.webp',
		'Kl_W_Essen.webp',
		'Kl_W_Bad.webp',
		'Kl_W_Dusche.webp'
	];
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
		'Kl_W_Wohnzimmer1.webp',
		'Kl_W_Essen.webp',
		'Kl_W_Bad.webp',
		'Kl_W_Dusche.webp'
	];
</script>

<svelte:head>
	<title>Wohnungen</title>
</svelte:head>

<img
	class="hero full-width"
	style="width: 100vw"
	src="/Begrüßung.webp"
	alt="Übersicht komplette Wohnung"
/>
<h1>Wohnungsoptionen</h1>

<section id="bieberburg">
	<h3>Bieberburg (90 m<sup>2</sup>)</h3>
	<p>
		Wir bieten eine liebevoll gestaltete Wohnung mit ca. 90 qm und separatem Eingang an. Sie ist
		selbstverständlich mit allem ausgestattet, was man für einen bequemen und erholsamen Urlaub
		braucht und zum großen Teil barrierefrei und rollstuhlgerecht.
	</p>

	<a href="/Gr_W_gesamt2.webp"
		><img src="/Gr_W_gesamt2.webp" alt="Übersicht komplette Wohnung" />
	</a>
	<ImageGrid images={ganze_wohnung} />
	<h3>Ausstattung</h3>
	<ul>
		<li>W-Lan</li>
		<li>Möbliert</li>
		<li>Voll ausgestattete Küche</li>
		<li>2 Bäder</li>
		<li>2 TV-Geräte</li>
		<li>Nichtraucher</li>
		<li>Fußbodenheizung</li>
		<li>Parkplatz</li>
	</ul>

	<h3>Beschreibung</h3>
	<ul>
		<li>Ca. 90 qm-Erdgeschosswohnung für 4 bis 6 Personen (zusätzliches Kinderbett ist möglich)</li>
		<li>2 separate Eingänge</li>
		<li>Separates Schlafzimmer mit 2 Betten (einzeln oder zusammen geschoben)</li>
		<li>Schlafempore mit Doppelbett (160 cm x 200 cm)</li>
		<li>
			Großer Wohn-Essbereich mit integrierter voll ausgestatteter Küche und Sat-TV (mit Schlafsofa
			(140 cm x 200 cm) in separater Ecke
		</li>
		<li>
			Weiterer offener Wohnzimmer-Bereich mit zusätzlichem Schlafsofa (140cm x 200cm) und einem
			weiteren TV
		</li>
		<li>Großes barrierefreies Duschbad mit Handtuchheizkörper, Fön</li>
		<li>Kleines Duschbad mit Handtuchheizkörper</li>
		<li>Fußbodenheizung</li>
		<li>Wohnung barrierefrei (rollstuhlgerecht) mit 2 separaten Eingängen</li>
		<li>Zusätzliches Kinderbett möglich</li>
		<li>Spiele-Kiste für Kinder</li>
		<li>1. Hilfe-Set</li>
		<li>Haustier (Hund) nach Absprache u.U. möglich</li>
		<li>Waschmaschinen- und Trocknernutzung möglich</li>
	</ul>

	<h3>Küche</h3>
	<ul>
		<li>Herd mit Backofen</li>
		<li>Kühlschrank (mit Eisfach)</li>
		<li>Spülmaschine</li>
		<li>Mikrowelle</li>
		<li>Kaffeemaschine, Wasserkocher</li>
		<li>Toaster</li>
		<li>Radio</li>
		<li>Staubsauger</li>
		<li>Hochstuhl möglich</li>
	</ul>

	<p>
		Die Wohnung ist flexibel nutzbar, weil sie sich bei Bedarf auch in zwei (<a href="#bieberbau"
			>Bieberbau</a
		>
		und <a href="#bieberhöhle">Bieberhöhle</a>), in sich abgeschlossene Bereiche mit jeweils
		separatem Eingang und eigenem Bad aufteilen lässt. Daher eignet sie sich gut für Familien mit
		mehreren Kindern, aber auch z.B. für befreundete Paare oder Kleinfamilien, für mitreisende
		Großeltern oder erwachsene Kinder.
	</p>
	<p>
		So kann man gemeinsam Urlaub machen und ist doch unabhängig. Man kann sich mal zurückziehen und
		hat seine Privatsphäre.
	</p>
	<p>
		Die Wohnungen liegen Wand an Wand, insofern gibt es natürlich keinen kompletten Schallschutz.
	</p>
	<p>Aufgeteilt sind die beiden Wohnhälften folgendermaßen ausgestattet:</p>
</section>

<section id="bieberbau">
	<h3>Bieberbau (55 m<sup>2</sup>)</h3>
	<a href="/Gr_W_gesamt2.webp"
		><img src="/Gr_W_gesamt2.webp" alt="Übersicht komplette Wohnung" />
	</a>
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
		<li>Spiele-Kiste für Kinder</li>
		<li>1. Hilfe-Set</li>
		<li>Haustier nach Absprache u.U. möglich</li>
		<li>Waschmaschinen- und Trocknernutzung möglich</li>
	</ul>

	<h3>Küche</h3>
	<ul>
		<li>Herd mit Backofen</li>
		<li>Kühlschrank (ohne Eisfach)</li>
		<li>kleiner Eisschrank</li>
		<li>Spülmaschine</li>
		<li>Mikrowelle</li>
		<li>Kaffeemaschine, Wasserkocher</li>
		<li>Toaster</li>
		<li>Radio</li>
		<li>Staubsauger</li>
		<li>Hochstuhl möglich</li>
	</ul>
</section>

<section id="bieberhöhle">
	<h3>Bieberhöhle (35 m<sup>2</sup>)</h3>
	<a href="/Kl_W_Schlafzimmer2.webp">
		<img class="test" src="/Kl_W_Schlafzimmer2.webp" alt="Übersicht komplette Wohnung" />
	</a>
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

<style>
	h3,
	a {
		color: var(--bieber);
	}

	a {
		text-decoration: underline;
	}

	h3 {
		font-family: 'Courgette';
		font-weight: 700;
		font-size: 1.5rem;
	}

	section {
		width: 100%;
	}

	img {
		width: 100%;
		border-radius: 0.5em;
	}
</style>
