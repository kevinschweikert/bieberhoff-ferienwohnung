module.exports = {
	mode: "jit",
	darkMode: "media",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				'bieber-grün': 'rgb(30, 175, 18)'
			},
			
		},
		fontFamily: {
			'serif': ['"Courgette"'],
			'sans': ['"Roboto Slab"']
		}
	},
	plugins: [],
};
