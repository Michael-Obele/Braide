<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import DotPattern from '$lib/components/magic/dot-pattern/dot-pattern.svelte';
	import { reveal } from '$lib/attachments/reveal';
	import { profile } from '$lib/data/cv.js';
	import { Mail, MapPin, Phone } from '@lucide/svelte';

	const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
		'Network project inquiry — via portfolio'
	)}&body=${encodeURIComponent('Hi Damiete,\n\n')}`;
</script>

<footer id="contact" class="relative scroll-mt-20 overflow-hidden border-t border-border">
	<DotPattern
		width={22}
		height={22}
		class="mask-[radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)] text-primary/35"
	/>

	<div class="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" {@attach reveal()}>
		<p class="font-mono text-xs tracking-[0.25em] text-primary uppercase">07 · Handshake</p>
		<h2
			class="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl md:text-6xl"
		>
			Ready to deploy?
			<span class="text-primary italic">Let’s establish the link.</span>
		</h2>
		<p class="mt-5 max-w-xl leading-relaxed text-muted-foreground">
			Hiring for a network role, need WLAN design or presales expertise, or want a technical writer
			who actually speaks 802.11? The fastest route is email — she replies within a day.
		</p>

		<div class="mt-9 flex flex-wrap items-center gap-3">
			<Button href={mailto} size="lg">
				<Mail data-icon="inline-start" />
				Write to {profile.firstName}
			</Button>
			<Button href={profile.phoneHref} variant="outline" size="lg">
				<Phone data-icon="inline-start" />
				{profile.phone}
			</Button>
		</div>

		<div
			class="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6"
		>
			<p class="font-mono text-xs tracking-widest text-muted-foreground uppercase">
				DKB<span class="text-primary">/</span>net · {new Date().getFullYear()}
			</p>
			<p
				class="flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase"
			>
				<MapPin class="size-3.5 text-primary" />
				{profile.location}
			</p>
		</div>
	</div>
</footer>
