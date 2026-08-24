<script lang="ts">
	import SectionHeading from './section-heading.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { reveal } from '$lib/attachments/reveal';
	import { certifications } from '$lib/data/cv.js';
	import { Medal } from '@lucide/svelte';

	const tierStyles: Record<string, string> = {
		Professional: 'border-primary/50 bg-primary/10 text-primary',
		'Presales Specialist': 'border-signal/40 bg-signal/10 text-signal',
		Honors: 'border-foreground/25 bg-foreground/5 text-foreground'
	};
</script>

<section id="credentials" class="scroll-mt-20 border-t border-border bg-card/40">
	<div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
		<SectionHeading
			index="04"
			kicker="Proof"
			title="Certified thirteen times over."
			note="Huawei-certified across Datacom, WLAN, security, storage, IP networking, and data center facilities."
		/>

		<div class="space-y-8">
			{#each certifications as tier, i (tier.tier)}
				<div {@attach reveal(i * 80)}>
					<div class="flex items-center gap-3">
						<Medal class="size-4 text-primary" />
						<h3 class="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
							{tier.tier}
						</h3>
						<span class="font-mono text-xs text-muted-foreground/60">({tier.items.length})</span>
					</div>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each tier.items as cert (cert)}
							<Badge
								variant="outline"
								class="{tierStyles[tier.tier] ?? ''} h-auto px-3 py-1.5 text-sm font-normal"
							>
								{cert}
							</Badge>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
