<script lang="ts">
	import SectionHeading from './section-heading.svelte';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
	import { reveal } from '$lib/attachments/reveal';
	import { projects } from '$lib/data/cv.js';
	import { ArrowUpRight } from '@lucide/svelte';
</script>

<section id="projects" class="scroll-mt-16 border-t border-border bg-card/40">
	<div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
		<SectionHeading
			index="02"
			kicker="Field Work"
			title="Engagements that shipped."
			note="Banks, ministries, airports, universities — surveyed, simulated, proposed, and deployed."
		/>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i (project.client)}
				<Card
					class="group relative gap-4 overflow-visible border border-border/70 bg-background p-5 pt-6 shadow-none ring-0 transition-colors duration-300 hover:border-primary/50 {project.featured
						? 'pt-8 ring-1 ring-primary/30 sm:col-span-2 lg:col-span-1'
						: ''}"
					{@attach reveal((i % 3) * 80)}
				>
					{#if project.featured}
						<span
							class="absolute -top-3 left-5 z-10 rounded-sm bg-primary px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest text-primary-foreground uppercase shadow-sm"
						>
							Flagship · Wi-Fi 7
						</span>
					{/if}
					<CardContent class="flex h-full flex-col justify-between gap-4 p-0">
						<div>
							<div class="flex items-start justify-between gap-3">
								<h3 class="font-display text-xl leading-snug font-medium">{project.client}</h3>
								<ArrowUpRight
									class="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
								/>
							</div>
							<p class="mt-1.5 font-mono text-[11px] tracking-widest text-primary uppercase">
								{project.scope}
							</p>
							<p class="mt-3 text-sm leading-relaxed text-muted-foreground">{project.detail}</p>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
