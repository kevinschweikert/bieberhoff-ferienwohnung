<svelte:head>
	<title>Impressum</title>
</svelte:head>

{#snippet emphasize(text)}
	<span class="font-bold text-bieber">{text}</span> <br />
{/snippet}

<section class="flex flex-col px-4">
	<h1>Impressum</h1>
	<h2>Angaben gemäß §5 TMG</h2>

	<p>
		{@render emphasize("Anschrift")}
		Matthias Bieber <br />
		Blockhauser Weg 6 <br />
		26605 Aurich
	</p>

	<p>
		Steuernummer: <br />
		Gewinnermittlung nach § 4 Abs. 3 EStG <br />
		Bezeichnung des Betriebs: Bieberhoff Fereienwohnungen
	</p>

	<p>
		{@render emphasize("Kontakt")}
		Telefon: 04941/9238414 <br />
		E-Mail: <a href="mailto:info@bieberhoff.de">info@bieberhoff.de</a>
	</p>

	<p>
		{@render emphasize("Fotos")}
		Birgit Cullmann <br />
		Osterfeldstraße 3 <br />
		26605 Aurich <br />
		info@cullmanfoto.com <br />

		Jonas Kurz
	</p>

	<p>
		{@render emphasize("Logo")}
		Andrea Rudolph
	</p>

	<p>
		{@render emphasize("Website")}
		Kevin Schweikert
	</p>
</section>
