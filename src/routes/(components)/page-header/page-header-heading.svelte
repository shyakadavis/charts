<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLHeadingElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<h1
	class={cn(
		'text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]',
		className
	)}
	{...$$restProps}
>
	<slot></slot>
</h1>
