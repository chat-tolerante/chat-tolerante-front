/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
            colors:{
                // Using modern `rgb`
                divider: 'rgb(var(--color-divider) / <alpha-value>)',
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                bg1: 'rgb(var(--color-bg1) / <alpha-value>)',
                bg2: 'rgb(var(--color-bg2) / <alpha-value>)',
                gradient1: 'rgb(var(--color-gradient1) / <alpha-value>)',
                gradient2: 'rgb(var(--color-gradient2) / <alpha-value>)',
            }
        },
	},
	plugins: [],
};
