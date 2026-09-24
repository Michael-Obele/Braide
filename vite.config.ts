import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),

		sveltekit({
			// Remote functions: type-safe server queries callable from components.
			experimental: { remoteFunctions: true },
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				// Enables `await` inside component markup (required by remote functions).
				experimental: { async: true }
			},
			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),
			vitePlugin: {
				inspector: {
					toggleKeyCombo: 'alt-x',
					showToggleButton: 'active',
					toggleButtonPos: 'bottom-right'
				}
			}
		})
	]
});
