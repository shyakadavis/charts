<script lang="ts">
	import { page } from '$app/stores';
	import { ScrollArea, Scrollbar } from '$lib/components/ui/scroll-area/index.js';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };

	const links = [
		{
			name: 'Area Chart',
			href: '/#area-chart'
		},
		{
			name: 'Bar Chart',
			href: '/#bar-chart'
		},
		{
			name: 'Line Chart',
			href: '/#line-chart'
		},
		{
			name: 'Pie Chart',
			href: '/#pie-chart'
		},
		{
			name: 'Radar Chart',
			href: '/#radar-chart'
		},
		{
			name: 'Radial Chart',
			href: '/#radial-chart'
		},
		{
			name: 'Tooltip',
			href: '/#tooltip'
		}
	];

	$: pathname = $page.url.pathname;
</script>

<ScrollArea class="max-w-[600px] lg:max-w-none">
	<div class={cn('flex items-center', className)} {...$$restProps}>
		{#each links as example, index}
			<a
				href={example.href}
				class={cn(
					'flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
					pathname?.startsWith(example.href) || (index === 0 && pathname === '/')
						? 'bg-muted font-medium text-primary'
						: 'text-muted-foreground'
				)}
			>
				{example.name}
			</a>
		{/each}
	</div>
	<Scrollbar orientation="horizontal" class="invisible" />
</ScrollArea>
