<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';
	import Check from 'lucide-svelte/icons/check';
	import Clipboard from 'lucide-svelte/icons/clipboard';

	let className: string | undefined | null = undefined;
	export { className as class };
	export let code: string;

	let hasCopied = false;

	function handleCopy() {
		navigator.clipboard.writeText(code);
		hasCopied = true;
	}

	$: {
		if (hasCopied) {
			setTimeout(() => {
				hasCopied = false;
			}, 2000);
		}
	}
</script>

<Tooltip.Root>
	<Tooltip.Trigger asChild>
		<Button
			size="icon"
			variant="outline"
			class={cn('[&_svg]-h-3.5 h-7 w-7 rounded-[6px] [&_svg]:w-3.5', className)}
			on:click={handleCopy}
			{...$$restProps}
		>
			<span class="sr-only">Copy</span>
			{#if hasCopied}
				<Check />
			{:else}
				<Clipboard />
			{/if}
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content class="bg-black text-white">Copy code</Tooltip.Content>
</Tooltip.Root>
