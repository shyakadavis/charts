<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { ChartContainer, ChartTooltip, type ChartConfig } from '$lib/components/ui/chart';
	import { format, PeriodType } from '@layerstack/utils';
	import { curveNatural } from 'd3-shape';
	import { parseISO } from 'date-fns';
	import { AreaChart, Tooltip } from 'layerchart';
	import TrendingUp from 'lucide-svelte/icons/trending-up';

	const chartData = [
		{ date: parseISO('2024-01-01'), desktop: 186, mobile: 80 },
		{ date: parseISO('2024-02-01'), desktop: 305, mobile: 200 },
		{ date: parseISO('2024-03-01'), desktop: 237, mobile: 120 },
		{ date: parseISO('2024-04-01'), desktop: 73, mobile: 190 },
		{ date: parseISO('2024-05-01'), desktop: 209, mobile: 130 },
		{ date: parseISO('2024-06-01'), desktop: 214, mobile: 140 }
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

	let tweened = true;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Area Chart - Legend</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<ChartContainer>
			<AreaChart
				data={chartData}
				x="date"
				series={[
					{
						key: 'mobile',
						label: 'Mobile',
						color: chartConfig.mobile.color
					},
					{
						key: 'desktop',
						label: 'Desktop',
						color: chartConfig.desktop.color
					}
				]}
				seriesLayout="stack"
				props={{
					area: { curve: curveNatural, 'fill-opacity': 0.4, line: { class: 'stroke-1' }, tweened },
					xAxis: { format: PeriodType.Month },
					yAxis: { format: () => '' }
				}}
			>
				<svelte:fragment slot="tooltip">
					<Tooltip.Root let:data variant="none">
						<ChartTooltip
							tooltipLabel={format(data.date, PeriodType.Month, { variant: 'long' })}
							config={chartConfig}
							payload={data}
							indicator="line"
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
