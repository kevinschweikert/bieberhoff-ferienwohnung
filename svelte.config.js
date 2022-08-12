//import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [],

	kit: {
		adapter: vercel(),
		prerender: {
			crawl: true,
		},
		browser: {

			router: false
		}
	}

};

export default config;
