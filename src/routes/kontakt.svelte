<script>
	let sent = false;
	let mail = '';

	const send = (e) => {
		const formData = new FormData(e.target);
		let json = Object.fromEntries(formData.entries());
		
		fetch('/mail', {
			method: 'POST',
			mode: "cors",
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			body: JSON.stringify(json) 
		});

		sent = true;
	};

</script>

<h1>Kontakt</h1>
<section>
	{#if !sent}
		<form action="#" on:submit|preventDefault={send}>
			<label for="vorname">Vorname</label>
			<input type="text" name="vorname" id="vorname" required />

			<label for="nachname">Nachname</label>
			<input type="text" name="nachname" id="nachname" />

			<label for="mail">E-Mail</label>
			<input type="email" name="mail" id="mail" bind:value={mail} required />
			<div class="row">
				<div class="col">
					<label for="komplett">Komplette Wohnung 90€/Nacht</label>
					<input type="radio" name="wohnung" id="komplett" value="Komplette Wohnung" required />
				</div>

				<div class="col">
					<label for="groß">Große Wohnung 55€/Nacht</label>
					<input type="radio" name="wohnung" id="groß" value="Große Wohnung" required />
				</div>

				<div class="col">
					<label for="klein">Kleine Wohnung 35€/Nacht</label>
					<input type="radio" name="wohnung" id="klein" value="Kleine Wohnung" required />
				</div>
			</div>
			<label for="anzahl">Personenanzahl</label>
			<input type="number" id="anzahl" name="anzahl" min="1" max="10" required />

			<div>
				<input type="checkbox" id="only" name="only" value="Ja"/>
				<label for="only"
					>Ich möchte, dass während meines Aufenthaltes die andere Wohnung nicht belegt ist</label
				>
			</div>

			<label for="start">Von</label>
			<input type="date" name="start" id="start" required />

			<label for="ende">Bis</label>
			<input type="date" name="ende" id="ende" required />

			<label for="kommentar">Kommentar</label>
			<textarea rows="5" name="kommentar" id="kommentar" />

			<input type="submit" value="Anfrage senden" />
		</form>
	{:else}
		<div class="confirm">
			Danke für ihre Anfrage. Wir haben Ihnen eine Mail an <span>{mail}</span> gesendet.
		</div>
	{/if}
	<hr />
	<p>
		Alternativ schreiben Sie uns eine Mail an: <br />
		<a href="mailto:info@bieberhoff.de">info@bieberhoff.de</a>
	</p>
	<p>Oder rufen Sie an unter der: <a href="tel:+49049419238414">04941/9238414</a></p>
</section>

<style>
	hr {
		border: 1px solid black;
		width: 100%;
	}

	section {
		display: flex;
		flex-direction: column;
	}

	a,
	span {
		color: var(--bieber);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	div {
		margin: 1em 0;
		max-width: 500px;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.col {
		display: flex;
		flex-direction: column;
		border: solid 1px var(--akzent);
		margin: 0.5em;
		padding: 0.5em;
		border-radius: 0.25em;
	}

	input,
	textarea {
		border-color: var(--akzent);
		border-style: solid;
		border-radius: 0.25em;
		max-width: 500px;
		min-height: 2em;
	}

	input[type='submit'] {
		border-style: none;
		background-color: var(--bieber);
		color: white;
		padding: 1em;
		font-size: large;
		cursor: pointer;
	}
	input[type='submit']:hover {
		opacity: 0.8;
	}

	input[type='radio'] {
		margin: 1em;
	}

</style>
