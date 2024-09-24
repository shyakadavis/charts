<script lang="ts">
	import type { Block } from '$lib/schema';
	import ChartArea from 'lucide-svelte/icons/chart-area';
	import ChartBarBig from 'lucide-svelte/icons/chart-bar-big';
	import ChartLine from 'lucide-svelte/icons/chart-line';
	import ChartPie from 'lucide-svelte/icons/chart-pie';
	import Hexagon from 'lucide-svelte/icons/hexagon';
	import MousePointer2 from 'lucide-svelte/icons/mouse-pointer-2';
	import Radar from 'lucide-svelte/icons/radar';

	export let chart: Block;

	const { subcategory } = chart;
</script>

{#if subcategory}
	{#if subcategory === 'Line'}
		<ChartLine /> Chart
	{:else if subcategory === 'Bar'}
		<ChartBarBig /> Chart
	{:else if subcategory === 'Pie'}
		<ChartPie /> Chart
	{:else if subcategory === 'Area'}
		<ChartArea /> Chart
	{:else if subcategory === 'Radar'}
		<Hexagon /> Chart
	{:else if subcategory === 'Radial'}
		<Radar /> Chart
	{:else if subcategory === 'Tooltip'}
		<MousePointer2 /> Tooltip
	{:else}
		{subcategory}
	{/if}
{/if}
