<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ChartConfig } from '.';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		hideLabel?: boolean;
		hideIndicator?: boolean;
		indicator?: 'line' | 'dot' | 'dashed';
		config: ChartConfig;
		nestLabel?: boolean;
		payload: unknown;
		tooltipLabel?: string;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let hideIndicator: $$Props['hideIndicator'] = false;
	export let indicator: $$Props['indicator'] = 'dot';
	export let nestLabel: $$Props['nestLabel'] = false;
	export let config: $$Props['config'];
	export let payload: $$Props['payload'];
	export let tooltipLabel: $$Props['tooltipLabel'] = undefined;
	export let hideLabel: $$Props['hideLabel'] = false;

	// Helper to extract item config from a payload.
	function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown) {
		// Ensure the payload is an object
		if (typeof payload === 'object' && payload !== null) {
			// Get all the keys in the payload dynamically
			const payloadKeys = Object.keys(payload);

			// Loop over the keys from the payload
			return payloadKeys
				.map((key) => {
					const itemValue = (payload as Record<string, unknown>)[key];
					const itemConfig = config[key];

					// Return the config merged with the value if the config exists for this key
					if (itemConfig) {
						return {
							...itemConfig, // chartConfig properties (label, color, etc.)
							value: itemValue // payload value
						};
					}
					// If there's no config for the key, return undefined or skip it
					return undefined;
				})
				.filter(Boolean); // Filter out undefined values
		}

		// Return undefined if the payload is invalid
		return undefined;
	}

	$: itemConfig = getPayloadConfigFromPayload(config, payload);
</script>

{#if itemConfig}
	<div
		class={cn(
			'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
			className
		)}
	>
		{#if !hideLabel}
			{tooltipLabel}
		{/if}
		<div class="grid gap-1.5">
			{#each itemConfig as item}
				<div
					class={cn(
						'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
						indicator === 'dot' && 'items-center'
					)}
				>
					{#if item?.icon}
						<svelte:component this={item.icon} />
					{:else if !hideIndicator}
						<div
							class={cn('shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]', {
								'h-2.5 w-2.5': indicator === 'dot',
								'w-1': indicator === 'line',
								'w-0 border-[1.5px] border-dashed bg-transparent': indicator === 'dashed',
								'my-0.5': nestLabel && indicator === 'dashed'
							})}
							style="--color-bg: {item?.color}; --color-border: {item?.color};"
						/>
					{/if}
					<div
						class={cn(
							'flex flex-1 justify-between leading-none',
							nestLabel ? 'items-end' : 'items-center'
						)}
					>
						<div class="grid gap-1.5">
							<span class="text-muted-foreground">
								{item?.label}
							</span>
						</div>
						<span class="font-mono font-medium tabular-nums text-foreground">
							{item?.value}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
