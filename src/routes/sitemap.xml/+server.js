const site = "https://ferienwohnung.bieberhoff.de";
import {routes} from "$lib/routes";

const pages = routes.filter(r => !r.external);
const urls= pages.map(r => `
<url>
  <loc>${site}${r.path ? r.path : ""}</loc>
  <changefreq>${r.seo?.changefreq ?? "monthly"}</changefreq>
  <priority>${r.seo?.priority ?? 0.5}</priority>
</url>
`).join("");

 
const sitemap = `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
		>
		${urls}
		</urlset>`.trim()

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const response = new Response(sitemap);
	response.headers.set("Cache-Control", "max-age=0, s-maxage=3600");
	response.headers.set("Content-Type", "application/xml");
	return response;
}


