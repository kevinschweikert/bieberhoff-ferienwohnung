import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";

const OWNER = {
	email: "info@bieberhoff.de",
	name: "Ferienwohnungen Bieberhoff",
};

const dateOptions = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
};

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		// Honeypot — bots fill hidden fields, real users don't.
		// Pretend success so scrapers don't iterate.
		if (data.get("website")) {
			return { success: true };
		}

		const vorname = data.get("vorname");
		const nachname = data.get("nachname");
		const mail_address = data.get("mail");
		const wohnung = data.get("wohnung");
		const anzahl = data.get("anzahl");
		const allein = data.get("only");
		const start = data.get("start");
		const ende = data.get("ende");
		const kommentar = data.get("kommentar");

		const von = new Date(start).toLocaleDateString("de-DE", dateOptions);
		const bis = new Date(ende).toLocaleDateString("de-DE", dateOptions);
		const only = allein === "Ja" ? "Ja" : "Nein";

		const mail = {
			from: OWNER,
			reply_to: { email: mail_address, name: `${vorname} ${nachname}` },
			personalizations: [
				{
					to: [OWNER],
					subject: `Buchungsanfrage von ${vorname} ${nachname}`,
					dynamic_template_data: {
						vorname,
						nachname,
						mail: mail_address,
						start: von,
						ende: bis,
						only,
						kommentar,
						wohnung,
						anzahl,
					},
				},
			],
			template_id: env.SENDGRID_TEMPLATE_ID,
		};

		const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
			},
			body: JSON.stringify(mail),
		});

		if (response.status !== 202) {
			const body = await response.text();
			console.error("SendGrid error", response.status, body);
			return fail(500, {
				vorname,
				nachname,
				mail_address,
				anzahl,
				wohnung,
				allein,
				start,
				ende,
				kommentar,
				error: true,
			});
		}

		return { success: true };
	},
};
