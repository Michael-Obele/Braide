<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';

	let {
		index,
		kicker,
		title,
		note
	}: { index: string; kicker: string; title: string; note?: string } = $props();
</script>

<div class="mb-8 md:mb-10" {@attach reveal()}>
	<p class="font-mono text-xs tracking-[0.25em] text-primary uppercase">
		{index} · {kicker}
	</p>
	<div class="mt-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
		<h2 class="font-display text-3xl leading-tight font-medium text-foreground md:text-5xl">
			{title}
		</h2>
		{#if note}
			<p class="max-w-sm pb-1 text-sm text-muted-foreground">{note}</p>
		{/if}
	</div>
	<div class="mt-5 h-px w-full bg-linear-to-r from-primary/60 via-border to-transparent"></div>
</div>
