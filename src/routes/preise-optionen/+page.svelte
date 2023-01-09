<script context="module">
	import Price from '$lib/Price.svelte';
</script>

<script>
	const facts = [
		{
			price: 110,
			size: 90,
			persons: '4-6',
			name: 'Bieberburg'
		},
		{
			price: 70,
			size: 55,
			persons: '2-3',
			name: 'Bieberbau'
		},
		{
			price: 45,
			size: 35,
			persons: '2-3',
			name: 'Bieberhöhle'
		}
	];
</script>

<svelte:head>
	<title>Preise + Optionen</title>
</svelte:head>

<h1>Preise und Mietoptionen</h1>

{#each facts as fact}
	<Price {...fact} />
{/each}
<ul>
	<li>
		Bei Aufenthalten von nur 1 oder 2 Nächten erheben wir eine zusätzliche Pauschale von insgesamt
		20 €
	</li>
	<li>jede weitere Person 5 €/Nacht</li>
	<li>Endreinigung zusätzlich 49€</li>
</ul>

<p>Die komplette Wohnung eignet sich z.B. gut für Familien mit mehreren Kindern.</p>
<p>
	Da die Wohnung sich teilen lässt und beide trotzdem voll ausgestattet sind (abgesehen von der
	kleinen Küche ohne Wasseranschluss), eignet sich die Unterkunft besonders gut für befreundete
	Paare oder Kleinfamilien, für Familien mit erwachsenen Kindern oder z.B. auch eine Kleinfamilie,
	die mit den Großeltern unterwegs ist. Man kann zusammen Urlaub machen und hat trotzdem seine
	Privatsphäre.
</p>
<p>
	Die Wohnungen liegen Wand an Wand, insofern gibt es natürlich keinen kompletten Schallschutz. Sie
	können aber gern eine der Wohnungen mieten mit dem Anspruch, dass die andere in dem Zeitraum
	unbewohnt bleibt. In dem Fall käme ein Aufpreis von 10 € pro Nacht hinzu.
</p>
<h2>Betreute Angebote mit unseren Pferden:</h2>
<img src="/auf_pferd.webp" alt="Menschen auf Pferd" id="down" class="narrow" />
<ul>
	<li>
		Wir bieten auf unserem Hof Reittherapie und pferdegestützte Trauma- und Erlebnispädagogik an
		(schauen Sie dazu gern auch auf die <a href="https://bieberhoff.de">Homepage</a>).
	</li>
	<li>Feriengäste erhalten auf diese Angebote 20% Ermäßigung.</li>
	<li>
		Alternativ haben wir für unsere Gastkinder (in Begleitung der Eltern) aber auch 30 Minuten
		Pony-Zeit für 6€. Dazu gehören etwa 10 Minuten Putzen und Versorgen, sowie ein kleiner geführter
		Ritt von 20 Minuten. Dies betreut in der Regel unsere Tochter Vanessa (16).
	</li>
	<li>
		Individuelle Angebote nach Absprache bietet unsere Tochter Emma (18) mit 50%iger Ermäßigung an.
		Sie ist meine Assistentin in der Reittherapie und entsprechend ausgebildet (Sachkunde, 1.Hilfe,
		viel Reit- und Pferdeerfahrung, sowie Erfahrung im Reitunterricht)
	</li>
	<li>
		Außerhalb der Therapie-Einheiten dürfen Sie grundsätzlich natürlich sehr gern jederzeit beim
		Putzen und Versorgen helfen. Auch ein erstes kurzes Erleben „auf dem Pferd“, nachdem die Pferde
		geritten wurden oder in der Therapie gearbeitet haben, ist selbstverständlich möglich.
	</li>
</ul>
