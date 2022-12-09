import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			server: { fs: { allow: ['./static'] } }
		},
		adapter: adapter({ out: 'build' }),
	}
};

export default config;
