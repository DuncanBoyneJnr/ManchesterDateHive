import adapter from '@sveltejs/adapter-static';

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
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing image placeholders during prerender
				if (path.endsWith('.png') || path.endsWith('.jpg')) {
					console.warn(`Ignoring missing asset: ${path} (referenced from ${referrer})`);
					return;
				}
				// Ignore code-of-conduct placeholder link
				if (path === '/code-of-conduct') {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
