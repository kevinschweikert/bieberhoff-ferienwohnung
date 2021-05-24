<script context="module">
	export const prerender = true;
		import Price from '$lib/Price.svelte';
</script>

<script>
	const facts = [
		{
			price: 90,
			size: 90,
			persons: "4-6",
			name: "Komplette Wohnung"
		},
		{
			price: 55,
			size: 55,
			persons: "2-3",
			name: "Große Wohnung"
		},
		{
			price: 35,
			size: 35,
			persons: "2-3",
			name: "Kleine Wohnung"
		}
	]
</script>

<style>
	svg {
		color:  var(--akzent);
		scale: 150%;
	}

	.umbau {
		line-height: 200%;
	}
</style>

<div class="content">
	<h1>Preise und Mietoptionen</h1>

	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>

	<div class="umbau">
	Durch noch laufende Umbauarbeiten auf dem Hof gibt es bei einer Buchung ab drei Nächten eine zusätzliche Übernachtung gratis.
	</div>

	{#each facts as fact}
		<Price {...fact}/>
	{/each}
	<ul>
		<li>Bei Aufenthalten von nur 1 oder 2 Nächten erheben wir eine zusätzliche Pauschale von insgesamt 20 €</li>
		<li>jede weitere Person 5 €/Nacht</li>
	</ul>


	<p>Die komplette Wohnung eignet sich z.B. gut für Familien mit mehreren Kindern.</p>
	<p>
		Da die Wohnung sich teilen lässt und beide trotzdem voll ausgestattet sind (abgesehen von der kleinen Küche ohne Wasseranschluss), eignet sich die Unterkunft besonders gut für befreundete Paare oder Kleinfamilien, für Familien mit erwachsenen Kindern oder z.B. auch eine Kleinfamilie, die mit den Großeltern unterwegs ist. Man kann zusammen Urlaub machen und hat trotzdem seine Privatsphäre.
	</p>
	<p>
		Die Wohnungen liegen Wand an Wand, insofern gibt es natürlich keinen kompletten Schallschutz. Sie können aber gern eine der Wohnungen mieten mit dem Anspruch, dass die andere in dem Zeitraum unbewohnt bleibt. In dem Fall käme ein Aufpreis von 10 € pro Nacht hinzu.
	</p>
	<h2>Betreute Angebote mit unseren Pferden:</h2>
	<ul>
		<li>
			Wir bieten auf unserem Hof Reittherapie und pferdegestützte Trauma- und Erlebnispädagogik an (schauen Sie dazu gern auch auf die <a href="https://bieberhoff.de">Homepage</a>).
		</li>
		<li>Feriengäste erhalten auf diese Angebote 20% Ermäßigung.</li>
		<li>
			Alternativ haben wir für unsere Gastkinder (in Begleitung der Eltern) aber auch 30 Minuten Pony-Zeit für 5 €. Dazu gehören etwa 10 Minuten Putzen und Versorgen, sowie ein kleiner geführter Ritt von 20 Minuten. Dies betreut in der Regel unsere Tochter Vanessa (15).
		</li>
		<li>
			Individuelle Angebote nach Absprache bietet unsere Tochter Emma (18) mit 50%iger Ermäßigung an. Sie ist meine Assistentin in der Reittherapie und entsprechend ausgebildet (Sachkunde, 1.Hilfe, viel Reit- und Pferdeerfahrung, sowie Erfahrung im Reitunterricht)
		</li>
		<li>
			Außerhalb der Therapie-Einheiten dürfen Sie grundsätzlich natürlich sehr gern jederzeit beim Putzen und Versorgen helfen. Auch ein erstes kurzes Erleben „auf dem Pferd“, nachdem die Pferde geritten wurden oder in der Therapie gearbeitet haben, ist selbstverständlich möglich.
		</li>
	</ul>
</div>
