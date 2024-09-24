<script>
	import { Button } from '$lib/components/ui/button';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Announcement from './(components)/announcement.svelte';
	import {
		PageActions,
		PageHeader,
		PageHeaderDescription,
		PageHeaderHeading
	} from './(components)/page-header';
</script>

<ModeWatcher />

<div class="container relative">
	<PageHeader>
		<Announcement />
		<PageHeaderHeading>Beautiful Charts</PageHeaderHeading>
		<PageHeaderDescription>
			Built using LayerChart. Copy and paste into your apps. Open Source.
		</PageHeaderDescription>
		<PageActions>
			<Button href="#charts" size="sm">Browse Charts</Button>
			<Button variant="ghost" size="sm">Documentation</Button>
		</PageActions>
	</PageHeader>
	<section id="charts" class="scroll-mt-20">
		<slot></slot>
	</section>
</div>
