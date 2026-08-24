<script lang="ts">
	import SectionHeading from './section-heading.svelte';
	import { reveal } from '$lib/attachments/reveal';
	import { publications } from '$lib/data/cv.js';
	import { PenLine } from '@lucide/svelte';
</script>

<section id="writing" class="scroll-mt-20 border-t border-border bg-card/40">
	<div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
		<SectionHeading
			index="05"
			kicker="Bylines"
			title="Writes like an engineer."
			note="Technical publications that translate networking and web concepts into plain, useful language."
		/>

		<ol class="divide-y divide-border border-y border-border">
			{#each publications as title, i (title)}
				<li class="group" {@attach reveal(i * 60)}>
					<span class="flex items-baseline gap-4 py-4 transition-colors md:gap-6 md:py-5">
						<span class="font-mono text-xs text-primary tabular-nums">
							{String(i + 1).padStart(2, '0')}
						</span>
						<span
							class="font-display text-lg leading-snug font-medium transition-transform duration-300 group-hover:translate-x-1.5 md:text-xl"
						>
							{title}
						</span>
						<PenLine
							class="ml-auto size-4 shrink-0 self-center text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:text-primary group-hover:opacity-100"
						/>
					</span>
				</li>
			{/each}
		</ol>
	</div>
</section>
