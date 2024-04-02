import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.sunpass.me/',
	integrations: [
		starlight({
			title: 'SunPass',
			favicon: './public/favicon.png',
			logo: {
				src: './public/logo.png',
			},
			social: {
				github: 'https://github.com/sunpass-d/sunpass',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
