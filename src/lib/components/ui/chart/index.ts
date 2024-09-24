import { type Icon } from 'lucide-svelte';
import { type ComponentType } from 'svelte';
import ChartContainer from './chart-container.svelte';
import ChartTooltip from './chart-tooltip.svelte';

export const THEMES = { light: '', dark: '.dark' } as const;

export type ChartConfig = {
	[k in string]: {
		label?: string;
		icon?: ComponentType<Icon>;
	} & (
		| { color?: string; theme?: never }
		| { color?: never; theme: Record<keyof typeof THEMES, string> }
	);
};

export { ChartContainer, ChartTooltip };
