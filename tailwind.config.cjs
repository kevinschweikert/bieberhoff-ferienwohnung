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
			'serif': ['Courgette', 'serif'],
			'sans': ['"Roboto Slab"', 'Arial', 'Helvetica', 'sans-serif']
		}
	},
	plugins: [],
};
