import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const vorname = data.get('vorname')
		const nachname = data.get('nachname')
		const mail_address = data.get('mail')
		const wohnung = data.get('wohnung')
		const anzahl = data.get('anzahl')
		const allein = data.get('only')
		const start = data.get('start')
		const ende = data.get('ende')
		const kommentar = data.get('kommentar')

		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

		const von = new Date(start);
		const bis = new Date(ende);

		let only = allein != 'Ja' ? 'Nein' : allein

		let mail = {
			from: {
				email: 'info@bieberhoff.de',
				name: 'Ferienwohnungen Bieberhoff'
			},
			personalizations: [
				{
					to: [
						{
							email: mail_address,
							name: `${vorname} ${nachname}`
						}
					],
					bcc: [
						{
							email: 'info@bieberhoff.de',
							name: 'Ferienwohnungen Bieberhoff'
						}
					],
					subject: 'Buchungsanfrage - Ferienwohnungen Bieberhoff',
					dynamic_template_data: {
						vorname: vorname,
						nachname: nachname,
						start: von.toLocaleDateString('de-DE', options),
						ende: bis.toLocaleDateString('de-DE', options),
						only: only,
						kommentar: kommentar,
						wohnung: wohnung,
						anzahl: anzahl
					}
				}
			],
			template_id: `${import.meta.env.VITE_SENDGRID_TEMPLATE_ID}`
		};



		const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${import.meta.env.VITE_SENDGRID_API_KEY}`
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(mail) // body data type must match "Content-Type" header
		});


		if (response.status != 202) {
			response.errors.forEach(eroro => {
				console.debug(error)
			});
			return fail(500, { vorname, nachname, mail_address, anzahl, wohnung, allein, start, ende, kommentar, error: true })
		}

		return { success: true, mail_address };
	}
}
