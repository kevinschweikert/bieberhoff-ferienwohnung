export async function post(request) {
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	const von = new Date(request.body.start);
	const bis = new Date(request.body.ende);

	let only = request.body.only;
	if (request.body.only != 'Ja') {
		only = 'Nein';
	}

	let data = {
		from: {
			email: 'info@bieberhoff.de',
			name: 'Ferienwohnungen Bieberhoff'
		},
		personalizations: [
			{
				to: [
					{
						email: request.body.mail,
						name: `${request.body.vorname} ${request.body.nachname}`
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
					vorname: request.body.vorname,
					nachname: request.body.nachname,
					start: von.toLocaleDateString('de-DE', options),
					ende: bis.toLocaleDateString('de-DE', options),
					only: only,
					kommentar: request.body.kommentar,
					wohnung: request.body.wohnung,
					anzahl: request.body.anzahl
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
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});

	return {
		status: response.status
	};
}
