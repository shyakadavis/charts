<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLParagraphElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<p
	class={cn('max-w-2xl text-balance text-lg font-light text-foreground', className)}
	{...$$restProps}
>
	<slot></slot>
</p>
