<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { ChartContainer, ChartTooltip, type ChartConfig } from '$lib/components/ui/chart';
	import { scaleBand } from 'd3-scale';
	import { AreaChart, Tooltip } from 'layerchart';
	import TrendingUp from 'lucide-svelte/icons/trending-up';

	const chartData = [
		{ month: 'January', desktop: 186, mobile: 80 },
		{ month: 'February', desktop: 305, mobile: 200 },
		{ month: 'March', desktop: 237, mobile: 120 },
		{ month: 'April', desktop: 73, mobile: 190 },
		{ month: 'May', desktop: 209, mobile: 130 },
		{ month: 'June', desktop: 214, mobile: 140 }
	];

	const chartConfig = {
		desktop: {
			label: 'Desktop',
			color: 'hsl(var(--chart-1))'
		},
		mobile: {
			label: 'Mobile',
			color: 'hsl(var(--chart-2))'
		}
	} satisfies ChartConfig;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Area Chart - Stacked</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<ChartContainer>
			<AreaChart
				data={chartData}
				xScale={scaleBand()}
				x="month"
				series={[
					{ key: 'mobile', label: 'Mobile', color: chartConfig.mobile.color },
					{ key: 'desktop', label: 'Desktop', color: chartConfig.desktop.color }
				]}
				seriesLayout="stack"
				props={{ xAxis: { format: (d) => d.slice(0, 3) } }}
				tooltip={{ mode: 'band' }}
			>
				<!-- TODO: Why is the upper-limit of the y-axis in the 500's? -->
				<!-- TODO: How to render smooth-curve lines for the chart areas (type)? -->
				<!-- TODO: How to specify that I don't want yAxis ticks? -->
				<!-- TODO: How to specify stroke size for area chart? -->
				<svelte:fragment slot="tooltip">
					<!-- TODO: Ask for a prop to unset/reset all Tooltip.Root default classes -->
					<Tooltip.Root let:data>
						<ChartTooltip
							tooltipLabel={data.month}
							config={chartConfig}
							payload={data}
							indicator="dot"
						/>
					</Tooltip.Root>
				</svelte:fragment>
			</AreaChart>
		</ChartContainer>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				<div class="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp class="size-4" />
				</div>
				<div class="flex items-center gap-2 leading-none text-muted-foreground">
					January - June 2024
				</div>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
