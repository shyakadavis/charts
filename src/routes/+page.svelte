<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import {
		ChartAreaAxes,
		ChartAreaDefault,
		ChartAreaGradient,
		ChartAreaIcons,
		ChartAreaLegend,
		ChartAreaLinear,
		ChartAreaStacked,
		ChartAreaStackedExpand,
		ChartAreaStep,
		ChartBarMultiple,
		ChartPieDonutText
	} from './(charts)';
	import ChartDisplay from './(components)/chart-display.svelte';
	import ChartsNav from './(components)/charts-nav.svelte';
</script>

<div class="grid gap-4">
	<ChartsNav
		class="[&>a:first-child]:bg-muted [&>a:first-child]:font-medium [&>a:first-child]:text-primary"
	/>
	<!-- <ThemesStyle /> -->
	<div class="gap-6 md:flex md:flex-row-reverse md:items-start">
		<!-- <ThemesSwitcher
          themes={THEMES}
          class="fixed inset-x-0 bottom-0 z-40 flex bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:sticky lg:bottom-auto lg:top-20"
        /> -->
		<div class="grid flex-1 gap-12">
			<h2 class="sr-only">Examples</h2>
			<div
				id="examples"
				class="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay name="chart-area-stacked">
					<ChartAreaStacked />
				</ChartDisplay>
				<ChartDisplay name="chart-bar-multiple">
					<ChartBarMultiple />
				</ChartDisplay>
				<ChartDisplay name="chart-pie-donut-text">
					<ChartPieDonutText />
				</ChartDisplay>
			</div>
			<Separator />
			<div
				id="area-chart"
				class="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay name="chart-area-default">
					<ChartAreaDefault />
				</ChartDisplay>
				<ChartDisplay name="chart-area-linear">
					<ChartAreaLinear />
				</ChartDisplay>
				<ChartDisplay name="chart-area-step">
					<ChartAreaStep />
				</ChartDisplay>
				<ChartDisplay name="chart-area-stacked">
					<ChartAreaStacked />
				</ChartDisplay>
				<ChartDisplay name="chart-area-stacked-expand">
					<ChartAreaStackedExpand />
				</ChartDisplay>
				<ChartDisplay name="chart-area-legend">
					<ChartAreaLegend />
				</ChartDisplay>
				<ChartDisplay name="chart-area-icons">
					<ChartAreaIcons />
				</ChartDisplay>
				<ChartDisplay name="chart-area-gradient">
					<ChartAreaGradient />
				</ChartDisplay>
				<ChartDisplay name="chart-area-axes">
					<ChartAreaAxes />
				</ChartDisplay>
			</div>
		</div>
	</div>
</div>
