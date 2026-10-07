// @ts-check
import { plugin as shadcn } from '@shadcn/lint';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		ignores: ['app/components/ui/**'],
	},
	{
		files: ['**/*.vue'],
		plugins: { shadcn },
	}
);
