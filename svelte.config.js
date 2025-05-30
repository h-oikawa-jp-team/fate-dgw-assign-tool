import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex()],
    kit: {
        // https://svelte.dev/docs/kit/adapter-static#GitHub-Pages
        adapter: adapter({
            fallback: '404.html',
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
        },
    },
    extensions: ['.svelte', '.svx'],
};

export default config;
