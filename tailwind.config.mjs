/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', './public/**/*.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Outfit', 'sans-serif'],
			},
			colors: {
				vdw: {
					blue: '#007bff',
					red: '#dc3545',
					green: '#28a745',
					dark: '#0a0a0f',
					card: '#13131f',
				},
				alabaster: {
					50: '#FFFFFF',
					100: '#FEFEFE',
					200: '#FEFEFE',
					300: '#FDFDFD',
					400: '#FBFBFB',
					500: '#F9F9F9',
					600: '#E0E0E0',
					700: '#959595',
					800: '#707070',
					900: '#4B4B4B',
				},
				'steel-blue': {
					50: '#F5F8FB',
					100: '#EBF2F6',
					200: '#CDDDE9',
					300: '#AFC9DC',
					400: '#73A1C2',
					500: '#3778A8',
					600: '#326C97',
					700: '#214865',
					800: '#19364C',
					900: '#112432',
				},
				'mine-shaft': {
					50: '#F5F5F5',
					100: '#EAEBEB',
					200: '#CBCCCC',
					300: '#ABADAE',
					400: '#6C7071',
					500: '#2D3234',
					600: '#292D2F',
					700: '#1B1E1F',
					800: '#141717',
					900: '#0E0F10',
				},
				biscay: {
					50: '#F4F5F7',
					100: '#E9EAEF',
					200: '#C9CBD6',
					300: '#A9ACBE',
					400: '#686D8D',
					500: '#272F5C',
					600: '#232A53',
					700: '#171C37',
					800: '#121529',
					900: '#0C0E1C',
				},
			},
			backgroundImage: {
				'hero-glow':
					'conic-gradient(from 180deg at 50% 50%, #007bff33 0deg, #dc354533 180deg, #28a74533 360deg)',
			},
		},
	},
};

