<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import HyperText from '$lib/components/magic/hyper-text/hyper-text.svelte';
	import NumberTicker from '$lib/components/magic/number-ticker/number-ticker.svelte';
	import AnimatedGridPattern from '$lib/components/magic/animated-grid-pattern/animated-grid-pattern.svelte';
	import LinkedInIcon from '$lib/components/site/linkedin-icon.svelte';
	import { reveal } from '$lib/attachments/reveal';
	import { profile, roles, stats } from '$lib/data/cv.js';
	import { ArrowDown, Download, MapPin } from '@lucide/svelte';
</script>

<section id="top" class="relative overflow-hidden pt-14">
	<!-- Backdrop: blueprint grid + animated signal grid + heatmap glow -->
	<div
		class="blueprint-grid pointer-events-none absolute inset-0 opacity-60"
		aria-hidden="true"
	></div>
	<AnimatedGridPattern
		class="mask-[radial-gradient(ellipse_75%_65%_at_50%_35%,black_30%,transparent_100%)] text-primary"
		numSquares={28}
		maxOpacity={0.28}
		duration={3.6}
		repeatDelay={0.8}
	/>
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_70%_20%,color-mix(in_oklab,var(--color-signal)_9%,transparent),transparent_70%)]"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-6xl px-4 pt-10 pb-12 md:px-8 md:pt-14 md:pb-16">
		<div class="max-w-3xl" {@attach reveal()}>
			<Badge
				variant="outline"
				class="h-7 gap-2 border-primary/40 px-3 font-mono text-xs tracking-widest text-primary uppercase"
			>
				<span class="relative flex size-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"
					></span>
					<span class="relative inline-flex size-2 rounded-full bg-primary"></span>
				</span>
				Open to opportunities
			</Badge>

			<h1
				class="mt-5 font-display text-[2.75rem] leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
			>
				{profile.firstName}
				<span class="font-display text-primary italic">Katerina</span>
				Braide
			</h1>

			<div
				class="mt-5 font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase sm:text-base"
			>
				<HyperText
					text="Network Engineer × Technical Writer × Instructor"
					as="p"
					duration={900}
					delay={350}
					characterSet={[
						'A',
						'B',
						'C',
						'D',
						'E',
						'F',
						'0',
						'1',
						'2',
						'4',
						'8',
						'/',
						'\\',
						'<',
						'>',
						'·'
					]}
					startOnView={false}
				/>
			</div>

			<p class="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
				{profile.summary}
			</p>

			<p
				class="mt-4 flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase"
			>
				<MapPin class="size-3.5 text-primary" />
				{profile.location}
			</p>

			<div class="mt-7 flex flex-wrap items-center gap-3">
				<Button href="mailto:{profile.email}?subject=Let%27s%20talk%20networks" size="lg">
					Start a conversation
				</Button>
				<Button
					href="/Damiete-Braide-CV.pdf"
					target="_blank"
					rel="noopener"
					variant="outline" class='hover:bg-primary! hover:text-black'
					size="lg"
				>
					<Download data-icon="inline-start" />
					Download CV
				</Button>
				<Button href={profile.linkedin} target="_blank" rel="noopener" variant="outline" class='hover:bg-primary! hover:text-black' size="lg">
					<LinkedInIcon class="size-4" />
					LinkedIn
				</Button>
			</div>
		</div>

		<!-- Stats strip -->
		<dl
			class="mt-10 grid grid-cols-2 border-y border-border md:grid-cols-4"
			aria-label="Career highlights"
		>
			{#each stats as stat, i (stat.label)}
				<div
					class="border-border px-4 py-5 not-last:border-r max-md:nth-2:border-r-0 max-md:nth-[-n+2]:border-b md:px-6"
					{@attach reveal(i * 90)}
				>
					<dt
						class="order-2 mt-1.5 font-mono text-[11px] leading-snug tracking-widest text-muted-foreground uppercase"
					>
						{stat.label}
					</dt>
					<dd class="order-1 font-display text-3xl font-medium text-foreground md:text-4xl">
						<NumberTicker value={stat.value} suffix={stat.suffix} class="text-primary" />
					</dd>
				</div>
			{/each}
		</dl>

		<a
			href="#experience"
			class="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
		>
			Scroll — trace the signal
			<ArrowDown class="size-3.5 animate-bounce" />
		</a>
	</div>
</section>
