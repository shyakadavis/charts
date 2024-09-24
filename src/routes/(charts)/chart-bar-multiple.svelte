<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { ChartContainer, ChartTooltip, type ChartConfig } from '$lib/components/ui/chart';
	import { scaleBand } from 'd3-scale';
	import { BarChart, Tooltip } from 'layerchart';
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
		<Card.Title>Bar Chart - Multiple</Card.Title>
		<Card.Description>January - June 2024</Card.Description>
	</Card.Header>
	<Card.Content>
		<ChartContainer>
			<BarChart
				data={chartData}
				xScale={scaleBand().padding(0.2)}
				x="month"
				series={[
					{ key: 'desktop', label: 'Desktop', color: chartConfig.desktop.color },
					{ key: 'mobile', label: 'Mobile', color: chartConfig.mobile.color }
				]}
				seriesLayout="group"
				props={{ xAxis: { format: (d) => d.slice(0, 3) }, bars: { stroke: 'none' } }}
			>
				<!-- TODO: How to specify that I don't want highlight lines that follow the cursor? -->
				<!-- TODO: How to specify that I don't want yAxis ticks? -->
				<!-- TODO: How to specify some padding/gaps between bars? -->
				<svelte:fragment slot="tooltip">
					<!-- TODO: Ask for a prop to unset/reset all Tooltip.Root default classes -->
					<Tooltip.Root let:data>
						<ChartTooltip
							tooltipLabel={data.month}
							config={chartConfig}
							payload={data}
							indicator="dashed"
						/>
					</Tooltip.Root>
				</svelte:fragment>
			</BarChart>
		</ChartContainer>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				<div class="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp class="size-4" />
				</div>
				<div class="flex items-center gap-2 leading-none text-muted-foreground">
					Showing total visitors for the last 6 months
				</div>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
