<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import type { Block } from '$lib/schema';
	import { cn } from '$lib/utils';
	import BlockCopyButton from './block-copy-button.svelte';
	import ChartTitle from './chart-title.svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
	export let chart: Block;
</script>

<div class={cn('flex items-center gap-2', className)}>
	<div
		class="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]"
	>
		<ChartTitle {chart} />
	</div>
	<div class="ml-auto flex items-center gap-2 [&>form]:flex">
		<BlockCopyButton
			code={chart.code}
			class="[&_svg]-h-3 size-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
		/>
		<Separator orientation="vertical" class="mx-0 hidden h-4 md:flex" />
		<!-- <ChartCodeViewer chart={chart}>{children}</ChartCodeViewer> -->
	</div>
</div>
