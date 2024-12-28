<script>
	import ImageGrid from "$lib/ImageGrid.svelte";
	import HeroImage from "$lib/HeroImage.svelte";

	import header from "$lib/images/Begrüßung.webp?enhanced";
	import ganze_wohnung_header from "$lib/images/grosse_wohnung/Gr_W_gesamt2.webp?enhanced";
	import grosse_wohnung_header from "$lib/images/grosse_wohnung/Gr_W_gesamt.webp?enhanced";
	import kleine_wohnung_header from "$lib/images/kleine_wohnung/Kl_W_Schlafzimmer2.webp?enhanced";

	const all_images = import.meta.glob(
		"$lib/images/{grosse_wohnung,kleine_wohnung}/*.webp",
		{
			query: {
				enhanced: true,
			},
			eager: true,
		},
	);
	const big_house_images = import.meta.glob(
		"$lib/images/grosse_wohnung/*.webp",
		{
			query: {
				enhanced: true,
			},
			eager: true,
		},
	);
	const small_house_images = import.meta.glob(
		"$lib/images/kleine_wohnung/*.webp",
		{
			query: {
				enhanced: true,
			},
			eager: true,
		},
	);
</script>

<svelte:head>
	<title>Wohnungen</title>
</svelte:head>

<HeroImage src={header} alt="Übersicht komplette Wohnung" />
<h1>Wohnungsoptionen</h1>

<section id="bieberburg">
	<h3>Bieberburg (90 m<sup>2</sup>)</h3>
	<p>
		Wir bieten eine liebevoll gestaltete Wohnung mit ca. 90 qm und separatem
		Eingang an. Sie ist selbstverständlich mit allem ausgestattet, was man für
		einen bequemen und erholsamen Urlaub braucht und zum großen Teil
		barrierefrei und rollstuhlgerecht.
	</p>
	<ImageGrid
		images={all_images}
		title={ganze_wohnung_header}
		gallery_id="ganze_wohnung"
	/>
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
		<li>
			Ca. 90 qm-Erdgeschosswohnung für 4 bis 6 Personen (zusätzliches Kinderbett
			ist möglich)
		</li>
		<li>2 separate Eingänge</li>
		<li>
			Separates Schlafzimmer mit 2 Betten (einzeln oder zusammen geschoben)
		</li>
		<li>Schlafempore mit Doppelbett (160 cm x 200 cm)</li>
		<li>
			Großer Wohn-Essbereich mit integrierter voll ausgestatteter Küche und
			Sat-TV (mit Schlafsofa (140 cm x 200 cm) in separater Ecke
		</li>
		<li>
			Weiterer offener Wohnzimmer-Bereich mit zusätzlichem Schlafsofa (140cm x
			200cm) und einem weiteren TV
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
</section>
<div class="bg-bieber text-white w-screen flex flex-col items-center">
	<h3 class="text-white">Tipp</h3>

	<p class="text-white">
		Die Wohnung ist flexibel nutzbar, weil sie sich bei Bedarf auch in zwei (<a
			class="text-white underline"
			href="#bieberbau">Bieberbau</a
		>
		und <a class="text-white underline" href="#bieberhöhle">Bieberhöhle</a>), in
		sich abgeschlossene Bereiche mit jeweils separatem Eingang und eigenem Bad
		aufteilen lässt. Daher eignet sie sich gut für Familien mit mehreren
		Kindern, aber auch z.B. für befreundete Paare oder Kleinfamilien, für
		mitreisende Großeltern oder erwachsene Kinder.
	</p>
	<p class="text-white">
		So kann man gemeinsam Urlaub machen und ist doch unabhängig. Man kann sich
		mal zurückziehen und hat seine Privatsphäre.
	</p>
	<p class="text-white">
		Die Wohnungen liegen Wand an Wand, insofern gibt es natürlich keinen
		kompletten Schallschutz.
	</p>
</div>

<p>Aufgeteilt sind die beiden Wohnhälften folgendermaßen ausgestattet:</p>

<section id="bieberbau">
	<h3>Bieberbau (55 m<sup>2</sup>)</h3>
	<ImageGrid
		images={big_house_images}
		title={grosse_wohnung_header}
		gallery_id="grosse_wohnung"
	/>
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
			Ca. 55 qm-Erdgeschosswohnung für 2 bis 3 Personen (zusätzliches Kinderbett
			ist möglich).
		</li>
		<li>
			Großer Wohn-Essbereich mit integrierter voll ausgestatteter Küche und
			Sat-TV
		</li>
		<li>Schlafsofa (140 x 200 cm) in separater Ecke</li>
		<li>Großes barrierefreies Duschbad mit Handtuchheizkörper, Fön</li>
		<li>
			Separates Schlafzimmer mit 2 Betten (einzeln oder zusammen geschoben)
		</li>
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
	<ImageGrid
		images={small_house_images}
		title={kleine_wohnung_header}
		gallery_id="kleine_wohnung"
	/>
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
		<li>
			Ca. 35 qm-Erdgeschosswohnung für 2 bis 3 Personen (zusätzliches Kinderbett
			möglich)
		</li>
		<li>Separater Eingang</li>
		<li>
			Großzügiger Wohn-Essbereich mit integrierter teil-ausgestatteter Küche und
			Sat-TV, mit Schlafsofa (149 x 200cm)
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
