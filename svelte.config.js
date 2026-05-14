import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		prerender: {
			crawl: true,
		},
	},
};

export default config;
