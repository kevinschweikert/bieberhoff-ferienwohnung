<script>
	import Price from "$lib/Price.svelte";
	import Image from "$lib/Image.svelte";
	import Banner from "$lib/Banner.svelte";
	import emma_on_horse from "$lib/images/auf_pferd.webp?enhanced";

	const bieberburg = {
		price: 130,
		size: 90,
		persons: "4-6",
		name: "Bieberburg",
	};
	const bieberbau = {
		price: 85,
		size: 55,
		persons: "2-3",
		name: "Bieberbau",
	};
	const bieberhöhle = {
		price: 50,
		size: 35,
		persons: "2-3",
		name: "Bieberhöhle",
	};
</script>

<svelte:head>
	<title>Preise + Optionen</title>
</svelte:head>

<h1>Preise und Mietoptionen</h1>

<Price {...bieberburg} />
<h2>Bei Nutzung als 2 seperate Wohnbereiche</h2>
<Banner title="Information">
	<p class="text-white">
		Die Buchung der einzelnen Wohnungen ist nur außerhalb der Ferien, Feier- und
		Brückentage möglich
	</p>
</Banner>
<Price {...bieberbau} />
<Price {...bieberhöhle} />
<ul>
	<li>
		Bei Aufenthalten von nur 1 oder 2 Nächten erheben wir eine zusätzliche
		Pauschale von insgesamt 30 €
	</li>
	<li>jede weitere Person 5 €/Nacht</li>
	<li>Endreinigung zusätzlich 49€</li>
</ul>

<Banner title="Hinweis">
	<p class="text-white">
		Eigene Haustiere können aus Rücksicht auf unsere Tiere leider nicht
		mitgebracht werden
	</p>
</Banner>

<h2>Betreute Angebote mit unseren Pferden:</h2>
<Image src={emma_on_horse} alt="Menschen auf Pferd" />
<p>
	Wir bieten auf unserem Hof Reittherapie sowie pferde- und tiergestützte
	Trauma- und Erlebnispädagogik an (schauen Sie dazu gern auch auf die <a
		href="https://bieberhoff.de">Homepage</a
	>).
</p>
<p>Feriengäste erhalten auf diese Angebote 20% Ermäßigung.</p>
<p>
	Wenn die personellen Möglichkeiten gegeben sind, kann für unsere Gastkinder
	(in Begleitung der Eltern) „Pony-Zeit“ für 30 bis 60 Minuten (Putzen,
	Versorgen, kleiner geführter Ritt) angeboten werden. Diese Aufgabe übernehmen
	ggf. unsere Tochter oder andere HelferInnen für 20€/h.
</p>
<p>
	Außerhalb der Therapie-Einheiten dürfen Sie grundsätzlich natürlich sehr gern
	jederzeit beim Putzen und Versorgen helfen. Auch ein erstes kurzes Erleben
	„auf dem Pferd“, nachdem die Pferde geritten wurden oder in der Therapie
	gearbeitet haben, ist selbstverständlich möglich.
</p>
