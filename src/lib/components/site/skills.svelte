<script lang="ts">
	import SectionHeading from './section-heading.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { reveal } from '$lib/attachments/reveal';
	import { pocCompetencies, skillGroups } from '$lib/data/cv.js';
	import type { Component } from 'svelte';
	import { Network, Router, ShieldCheck, Signal } from '@lucide/svelte';

	const icons: Record<string, Component> = {
		network: Network,
		router: Router,
		signal: Signal,
		'shield-check': ShieldCheck
	};
</script>

<section id="skills" class="scroll-mt-16">
	<div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
		<SectionHeading
			index="03"
			kicker="Toolkit"
			title="The stack behind the signal."
			note="From Layer 1 to the boardroom — design tools, protocols, and the presales craft that turns surveys into signed proposals."
		/>

		<div class="grid gap-4 sm:grid-cols-2" {@attach reveal()}>
			{#each skillGroups as group (group.title)}
				{@const Icon = icons[group.icon]}
				<div
					class="border border-border/70 bg-card p-5 transition-colors duration-300 hover:border-primary/40"
				>
					<div class="flex items-center gap-2.5">
						<Icon class="size-4 text-primary" />
						<h3 class="font-mono text-xs tracking-[0.2em] uppercase">{group.title}</h3>
					</div>
					<div class="mt-4 flex flex-wrap gap-1.5">
						{#each group.skills as skill (skill)}
							<Badge variant="secondary" class="font-normal">{skill}</Badge>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-8" {@attach reveal(120)}>
			<p class="mb-3 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
				Lab & POC competencies
			</p>
			<Accordion.Root type="single" class="border-y border-border">
				{#each pocCompetencies as comp (comp.title)}
					<Accordion.Item value={comp.title} class="border-border last:border-b-0">
						<Accordion.Trigger
							class="justify-between py-5 font-display text-lg font-medium hover:no-underline"
						>
							<span class="flex items-center gap-3">
								<span class="font-mono text-xs text-primary">▸</span>
								{comp.title}
							</span>
						</Accordion.Trigger>
						<Accordion.Content class="text-sm leading-relaxed text-muted-foreground">
							<ul class="space-y-2.5 pb-5 pl-6">
								{#each comp.items as item (item)}
									<li class="flex gap-3">
										<span class="mt-2.25 size-1 shrink-0 bg-signal" aria-hidden="true"></span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</div>
</section>
