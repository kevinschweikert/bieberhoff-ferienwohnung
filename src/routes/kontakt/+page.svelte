<script>
/** @type {import('./$types').ActionData} */
export let form;
</script>

<svelte:head>
	<title>Kontakt</title>
</svelte:head>

{#snippet checkbox(field, name, value, label)}
	<div>
		<input
			type="radio"
			id={value}
			class="hidden peer"
			{name}
			{value}
			checked={field == value}
			required
		/>
		<label
			for={value}
			class="flex flex-col gap-2 border-1 border-bieber p-2 rounded-md items-center hover:bg-bieber/10 cursor-pointer peer-checked:bg-bieber/50 hover:peer-checked:bg-bieber/50"
		>
			{label}
		</label>
	</div>
{/snippet}

<h1>Kontakt</h1>
{#if form?.success}
	<div class="bg-bieber p-4 m-1 rounded-md text-white flex flex-col gap-3">
		Danke für ihre Anfrage. Wir haben Ihnen eine Mail an <u
			><span class="underline">{form?.mail_address}</span></u
		> gesendet.
	</div>
{:else}
	<form method="POST" class="flex flex-col gap-2 px-4">
		<label for="vorname">Vorname</label>
		<input
			type="text"
			name="vorname"
			id="vorname"
			value={form?.vorname ?? ""}
			required
		/>

		<label for="nachname">Nachname</label>
		<input
			type="text"
			name="nachname"
			id="nachname"
			value={form?.nachname ?? ""}
		/>

		<label for="mail">E-Mail</label>
		<input
			type="email"
			name="mail"
			id="mail"
			value={form?.mail_address ?? ""}
			required
		/>
		<div class="grid grid-cols-3 gap-4">
			{@render checkbox(
				form?.wohnung,
				"wohnung",
				"Komplette Wohnung",
				"Komlette Wohnung",
			)}
			{@render checkbox(
				form?.wohnung,
				"wohnung",
				"Große Wohnung",
				"Große Wohnung",
			)}
			{@render checkbox(
				form?.wohnung,
				"wohnung",
				"Kleine Wohnung",
				"Kleine Wohnung",
			)}
		</div>
		<label for="anzahl">Personenanzahl</label>
		<input
			type="number"
			id="anzahl"
			name="anzahl"
			value={form?.anzahl ?? ""}
			min="1"
			max="10"
			required
		/>

		<label class="flex items-center gap-2 prose">
			<input
				class="w-6 h-6 rounded-sm text-bieber bg-gray-100"
				type="checkbox"
				id="only"
				name="only"
				value="Ja"
				checked={form?.allein == "Ja"}
			/>
			Ich möchte, dass während meines Aufenthaltes die andere Wohnung nicht belegt
			ist</label
		>

		<label for="start">Von</label>
		<input
			type="date"
			name="start"
			id="start"
			value={form?.start ?? ""}
			required
		/>

		<label for="ende">Bis</label>
		<input
			type="date"
			name="ende"
			id="ende"
			value={form?.ende ?? ""}
			required
		/>

		<label for="kommentar">Kommentar</label>
		<textarea
			rows="5"
			name="kommentar"
			class=""
			id="kommentar"
			value={form?.kommentar ?? ""}
		></textarea>

		{#if form?.error}
			<div
				class="border-1 border-red-700 p-4 m-1 rounded-md text-red-700 flex flex-col gap-3"
			>
				Entschuldigung! Ihre Anfrage konnte leider nicht gesendet werden.
				Versuchen Sie es bitte noch einmal oder versuchen Sie uns, auf einen der
				unten stehenden Wegen zu kontaktieren.
			</div>
		{/if}
		<input
			type="submit"
			class="rounded-md bg-bieber hover:bg-bieber/80 text-white p-4 text-xl cursor-pointer border-none"
			value="Anfrage senden"
		/>
	</form>
{/if}
<hr class="my-2" />
<p>
	Alternativ schreiben Sie uns eine Mail an: <br />
	<a href="mailto:info@bieberhoff.de">info@bieberhoff.de</a>
</p>
<p>
	Oder rufen Sie an unter der: <a href="tel:+49049419238414">04941/9238414</a>
</p>
