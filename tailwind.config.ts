import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {

			animation: {
				'spin-slow': 'spin 3s linear infinite',
				orbit: 'orbit 1.5s linear infinite',
				// dash: 'dash 2s ease-in-out infinite',
				float: 'float 6s ease-in-out infinite',
				wave: 'wave 8s linear infinite',
				bounce: 'bounce 2s infinite',
			},
			keyframes: {
				orbit: {
					'0%': { transform: 'rotate(0deg) translateX(30px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(30px) rotate(-360deg)' },
				},
				dash: {
					'0%': { strokeDashoffset: '880px' },
					'100%': { strokeDashoffset: '0px' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(-10px)' },
					'50%': { transform: 'translateY(10px)' },
				  },
				  wave: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				  },
			},
			colors: {
				background: 'hsl(var(--background))',
				PrimaryPurple: '#9333EA',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;