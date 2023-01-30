<script context="module">
	import Price from '$lib/Price.svelte';
	import angebote from '../../images/auf_pferd.webp';
</script>

<script>
	const bieberburg = {
		price: 110,
		size: 90,
		persons: '4-6',
		name: 'Bieberburg'
	};
	const bieberbau = {
		price: 70,
		size: 55,
		persons: '2-3',
		name: 'Bieberbau'
	};
	const bieberhöhle = {
		price: 45,
		size: 35,
		persons: '2-3',
		name: 'Bieberhöhle'
	};
</script>

<svelte:head>
	<title>Preise + Optionen</title>
</svelte:head>

<h1>Preise und Mietoptionen</h1>

<Price {...bieberburg} />

<h2>Bei Nutzung als 2 seperate Wohnbereiche</h2>
<Price {...bieberbau} />
<Price {...bieberhöhle} />
<ul>
	<li>
		Bei Aufenthalten von nur 1 oder 2 Nächten erheben wir eine zusätzliche Pauschale von insgesamt
		20 €
	</li>
	<li>jede weitere Person 5 €/Nacht</li>
	<li>Endreinigung zusätzlich 49€</li>
</ul>

<h2>Betreute Angebote mit unseren Pferden:</h2>
<img src={angebote} alt="Menschen auf Pferd" id="down" class="narrow" />
<ul>
	<li>
		Wir bieten auf unserem Hof Reittherapie und pferdegestützte Trauma- und Erlebnispädagogik an
		(schauen Sie dazu gern auch auf die <a href="https://bieberhoff.de">Homepage</a>).
	</li>
	<li>Feriengäste erhalten auf diese Angebote 20% Ermäßigung.</li>
	<li>
		Alternativ haben wir für unsere Gastkinder (in Begleitung der Eltern) aber auch 30 Minuten
		Pony-Zeit für 7,50€. Dazu gehören etwa 10 Minuten Putzen und Versorgen, sowie ein kleiner
		geführter Ritt von 20 Minuten. Dies betreut in der Regel unsere Tochter Vanessa (16).
	</li>
	<li>
		Individuelle Angebote nach Absprache bietet unsere Tochter Emma (20) mit 50%iger Ermäßigung an.
		Sie ist meine Assistentin in der Reittherapie und entsprechend ausgebildet (Sachkunde, 1.Hilfe,
		viel Reit- und Pferdeerfahrung, sowie Erfahrung im Reitunterricht)
	</li>
	<li>
		Außerhalb der Therapie-Einheiten dürfen Sie grundsätzlich natürlich sehr gern jederzeit beim
		Putzen und Versorgen helfen. Auch ein erstes kurzes Erleben „auf dem Pferd“, nachdem die Pferde
		geritten wurden oder in der Therapie gearbeitet haben, ist selbstverständlich möglich.
	</li>
</ul>
