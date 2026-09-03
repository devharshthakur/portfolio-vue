// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	modules: ['shadcn-nuxt', '@nuxt/eslint', '@nuxtjs/color-mode'],
	colorMode: {
		classSuffix: '',
	},
	devtools: { enabled: true },
	css: ['@fontsource-variable/geist-mono', '~/assets/css/tailwind.css'],
	srcDir: 'app/',
	compatibilityDate: '2025-07-15',
	vite: {
		plugins: [tailwindcss()],
	},
	eslint: {
		config: {
			stylistic: false,
		},
	},
	shadcn: {
		prefix: '',
		componentDir: '@/components/ui',
	},
});
