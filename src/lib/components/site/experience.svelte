<script lang="ts">
	import SectionHeading from './section-heading.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { reveal } from '$lib/attachments/reveal';
	import { experience } from '$lib/data/cv.js';
</script>

<section id="experience" class="scroll-mt-16">
	<div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
		<SectionHeading
			index="01"
			kicker="Career Path"
			title="Experience, in order of signal strength."
			note="Four roles, one throughline: making networks work — and making them make sense to people."
		/>

		<ol
			class="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-1.75 before:w-px before:bg-border md:space-y-10"
		>
			{#each experience as job (job.company + job.period)}
				<li class="relative pl-8 md:pl-12" {@attach reveal()}>
					<span
						class="absolute top-1.5 left-0 size-3.75 rounded-full border-2 border-background {job.current
							? 'bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_25%,transparent)]'
							: 'bg-muted-foreground'}"
						aria-hidden="true"
					></span>

					<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
						<h3 class="font-display text-2xl font-medium tracking-tight md:text-3xl">
							{job.role}
						</h3>
						<p class="font-mono text-xs tracking-widest text-muted-foreground uppercase">
							{job.period}
						</p>
					</div>
					<p class="mt-1 flex items-center gap-2.5 text-sm text-foreground/90">
						{job.company}
						{#if job.current}
							<Badge class="font-mono text-[10px] tracking-widest uppercase">Now</Badge>
						{/if}
					</p>

					<ul class="mt-4 space-y-2.5">
						{#each job.highlights as highlight, i (i)}
							<li class="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
								<span class="mt-2.25 size-1 shrink-0 bg-primary" aria-hidden="true"></span>
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ol>
	</div>
</section>
