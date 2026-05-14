<script>
/** @type {import('./$types').ActionData} */
let { form } = $props();
</script>


{#snippet wohnungOption(field, name, value)}
	<div>
		<input
			type="radio"
			id={value}
			class="sr-only peer"
			{name}
			{value}
			checked={field === value}
			required
		/>
		<label
			for={value}
			class="flex items-center justify-center text-center border border-bieber/40 p-3 rounded-md cursor-pointer transition-colors hover:bg-bieber/10 peer-checked:bg-bieber peer-checked:text-white peer-checked:border-bieber peer-focus-visible:ring-2 peer-focus-visible:ring-bieber/40"
		>
			{value}
		</label>
	</div>
{/snippet}

<section class="w-full max-w-2xl mx-auto px-4">
	<h1>Kontakt</h1>

	{#if form?.success}
		<div
			class="bg-bieber text-white p-5 rounded-lg shadow-md flex flex-col gap-2"
			role="status"
		>
			<p class="m-0 max-w-none text-white">
				Vielen Dank für Ihre Anfrage. Wir melden uns so schnell wie möglich bei
				Ihnen.
			</p>
		</div>
	{:else}
		<form method="POST" class="flex flex-col gap-4">
			<div class="absolute left-[-9999px]" aria-hidden="true">
				<label for="website">Bitte leer lassen</label>
				<input
					type="text"
					name="website"
					id="website"
					tabindex="-1"
					autocomplete="off"
				/>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<label for="vorname">Vorname</label>
					<input
						type="text"
						name="vorname"
						id="vorname"
						value={form?.vorname ?? ""}
						required
					/>
				</div>

				<div class="flex flex-col gap-1">
					<label for="nachname">Nachname</label>
					<input
						type="text"
						name="nachname"
						id="nachname"
						value={form?.nachname ?? ""}
					/>
				</div>
			</div>

			<div class="flex flex-col gap-1">
				<label for="mail">E-Mail</label>
				<input
					type="email"
					name="mail"
					id="mail"
					value={form?.mail_address ?? ""}
					required
				/>
			</div>

			<fieldset class="flex flex-col gap-2 border-0 p-0 m-0">
				<legend class="text-bieber font-medium mb-1">Wohnung</legend>
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
					{@render wohnungOption(form?.wohnung, "wohnung", "Komplette Wohnung")}
					{@render wohnungOption(form?.wohnung, "wohnung", "Große Wohnung")}
					{@render wohnungOption(form?.wohnung, "wohnung", "Kleine Wohnung")}
				</div>
			</fieldset>

			<div class="flex flex-col gap-1">
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
			</div>

			<label class="flex items-start gap-3">
				<input
					class="w-5 h-5 mt-1 accent-bieber"
					type="checkbox"
					id="only"
					name="only"
					value="Ja"
					checked={form?.allein === "Ja"}
				/>
				<span>
					Ich möchte, dass während meines Aufenthaltes die andere Wohnung nicht
					belegt ist
				</span>
			</label>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<label for="start">Von</label>
					<input
						type="date"
						name="start"
						id="start"
						value={form?.start ?? ""}
						required
					/>
				</div>

				<div class="flex flex-col gap-1">
					<label for="ende">Bis</label>
					<input
						type="date"
						name="ende"
						id="ende"
						value={form?.ende ?? ""}
						required
					/>
				</div>
			</div>

			<div class="flex flex-col gap-1">
				<label for="kommentar">Kommentar</label>
				<textarea
					rows="5"
					name="kommentar"
					id="kommentar"
					value={form?.kommentar ?? ""}
				></textarea>
			</div>

			{#if form?.error}
				<div
					class="border border-red-600 bg-red-50 text-red-800 p-4 rounded-md"
					role="alert"
				>
					Entschuldigung, Ihre Anfrage konnte leider nicht gesendet werden.
					Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns direkt.
				</div>
			{/if}

			<button
				type="submit"
				class="mt-2 rounded-md bg-bieber hover:bg-bieber-dark text-white px-6 py-3 text-lg font-medium transition-colors cursor-pointer"
			>
				Anfrage senden
			</button>
		</form>
	{/if}

	<hr class="my-8 border-bieber/20" />

	<div class="flex flex-col gap-3 text-base">
		<p class="m-0">
			Alternativ schreiben Sie uns eine Mail an
			<a
				class="text-bieber hover:text-bieber-dark underline"
				href="mailto:info@bieberhoff.de">info@bieberhoff.de</a
			>
		</p>
		<p class="m-0">
			Oder rufen Sie an unter
			<a
				class="text-bieber hover:text-bieber-dark underline"
				href="tel:+4949419238414">04941 / 9238414</a
			>
		</p>
	</div>
</section>
