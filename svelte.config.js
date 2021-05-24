//import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [],

	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			crawl: true,
		},
		router: false,
		hydrate: false
	}

};

export default config;
