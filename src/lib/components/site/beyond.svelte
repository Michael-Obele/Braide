<script lang="ts">
	import SectionHeading from './section-heading.svelte';
	import { reveal } from '$lib/attachments/reveal';
	import { education, leadership } from '$lib/data/cv.js';
	import { GraduationCap, Users } from '@lucide/svelte';
</script>

<section id="beyond" class="scroll-mt-16">
	<div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
		<SectionHeading
			index="06"
			kicker="Beyond the Rack"
			title="Leader in the community, student for life."
		/>

		<div class="grid gap-10 md:grid-cols-2 md:gap-8">
			<div {@attach reveal()}>
				<div class="flex items-center gap-2.5">
					<Users class="size-4 text-primary" />
					<h3 class="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
						Leadership & Affiliations
					</h3>
				</div>
				<ul class="mt-5 space-y-4">
					{#each leadership as item (item.role)}
						<li class="border-l-2 border-border pl-4 transition-colors hover:border-primary">
							<p class="font-display text-lg font-medium">{item.role}</p>
							<p class="text-sm text-muted-foreground">{item.org}</p>
						</li>
					{/each}
				</ul>
			</div>

			<div {@attach reveal(120)}>
				<div class="flex items-center gap-2.5">
					<GraduationCap class="size-4 text-primary" />
					<h3 class="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
						Education
					</h3>
				</div>
				<ul class="mt-5 space-y-4">
					{#each education as item (item.degree)}
						<li
							class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-l-2 border-border pl-4 transition-colors hover:border-signal"
						>
							<div>
								<p class="font-display text-lg font-medium">{item.degree}</p>
								<p class="text-sm text-muted-foreground">{item.school}</p>
							</div>
							<p class="font-mono text-xs tracking-widest text-muted-foreground uppercase">
								{item.period}
							</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
