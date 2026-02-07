import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH || ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing static asset placeholders during prerender
				if (path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.svg') || path.endsWith('.pdf')) {
					console.warn(`Ignoring missing asset: ${path} (referenced from ${referrer})`);
					return;
				}
				// Ignore code-of-conduct placeholder link
				if (path.includes('/code-of-conduct')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
