<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import ArrowRightIcon from 'lucide-svelte/icons/arrow-right';
	import ChartPie from 'lucide-svelte/icons/chart-pie';
</script>

<a href="/" class="group inline-flex items-center px-0.5 text-sm font-medium">
	<ChartPie class="size-4" />
	<Separator class="mx-2 h-4" orientation="vertical" />
	<span class="underline-offset-4 group-hover:underline"> pnpm dlx shadcn-svelte@latest init </span>
	<ArrowRightIcon class="ml-1 size-4" />
</a>
