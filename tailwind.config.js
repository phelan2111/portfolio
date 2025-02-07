/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backdropBlur: {
				xl: '2px',
			},
			colors: {
				primary_light: '#fbf8f3',
				primary_dark: '#232323',
				'primary_dark-10': '#2B2B2B',
				'primary_dark-20': '#3e3d3b',
				secondary: '#1AACAC',
				neutral: '#A9A9A9',
				error: '#EE4E4E',
			},
			backgroundImage: {},
			borderRadius: {
				orange: '60% 30% 30% 20%',
			},
			boxShadow: {},
			minHeight: {
				screen: '100dvh',
			},
			width: {
				screen: '100dvw',
			},
			height: {},
			keyframes: {
				flicker: {
					'0%, 100%': { opacity: 0 },
					'50%': { opacity: 1 },
				},
				about_intro: {
					'0%': { height: '0px' },
					'100%': { opacity: '40px' },
				},
				about_fe: {
					'0%': { height: '0px' },
					'100%': { opacity: '128px' },
				},
				about_details: {
					'0%': { height: '0px' },
					'100%': { opacity: '112px' },
				},
				about_scroll: {
					'0%': { height: '0px' },
					'100%': { opacity: '128px' },
				},
				about_block1: {
					'0%': { height: '0px' },
					'100%': { opacity: '224px' },
				},
				about_block2: {
					'0%': { height: '0px' },
					'100%': { opacity: '320px' },
				},
			},
			animation: {
				flicker: 'flicker 1s infinite',
				about_intro: 'about_intro 2s',
				about_fe: 'about_fe 2s',
				about_details: 'about_details 2s',
				about_scroll: 'about_scroll 2s',
				about_block1: 'about_block1 2s',
				about_block2: 'about_block2 2s',
			},
			backgroundSize: {
				'125%': '125%',
			},
			screens: {
				sm: '425px',
				md: '768px',
				lg: '1024px',
				xl: '1440px',
				xxl: '1920px',
			},
		},
	},
	darkMode: 'selector',
	plugins: [],
};
