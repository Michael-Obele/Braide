<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import DotPattern from '$lib/components/magic/dot-pattern/dot-pattern.svelte';
	import Socials from '$lib/components/site/socials.svelte';
	import { reveal } from '$lib/attachments/reveal';
	import { profile } from '$lib/data/cv.js';
	import { ArrowUp, Mail, MapPin, Phone } from '@lucide/svelte';

	const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
		'Network project inquiry — via portfolio'
	)}&body=${encodeURIComponent('Hi Damiete,\n\n')}`;

	const siteLinks = [
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Engagements' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#credentials', label: 'Credentials' },
		{ href: '#writing', label: 'Writing' },
		{ href: '#top', label: 'Top' }
	] as const;

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer id="contact" class="relative scroll-mt-16 overflow-hidden border-t border-border">
	<DotPattern
		width={22}
		height={22}
		class="mask-[radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)] text-primary/35"
	/>

	<div class="relative mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16" {@attach reveal()}>
		<div class="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
			<div>
				<p class="font-mono text-xs tracking-[0.25em] text-primary uppercase">Handshake</p>
				<h2
					class="mt-3 max-w-xl font-display text-3xl leading-[1.05] font-medium tracking-tight text-balance sm:text-4xl md:text-5xl"
				>
					Ready to deploy?
					<span class="text-primary italic">Let’s establish the link.</span>
				</h2>
				<p class="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
					Hiring for a network role, need WLAN design or presales expertise, or want a technical
					writer who actually speaks 802.11? The fastest route is email — she replies within a day.
				</p>

				<div class="mt-6 flex flex-wrap items-center gap-3">
					<Button href={mailto}>
						<Mail data-icon="inline-start" />
						Write to {profile.firstName}
					</Button>
					<Button href={profile.phoneHref} variant="outline">
						<Phone data-icon="inline-start" />
						{profile.phone}
					</Button>
				</div>
			</div>

			<div class="grid content-start gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr]">
				<nav aria-label="Footer">
					<p class="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
						Sitemap
					</p>
					<ul class="mt-4 space-y-1">
						{#each siteLinks as link (link.href)}
							<li>
								<a
									href={link.href}
									class="group inline-flex items-center gap-1.5 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
								>
									<span
										class="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3"
										aria-hidden="true"
									></span>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<div>
					<p class="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
						Direct line
					</p>
					<ul class="mt-4 space-y-3 text-sm">
						<li>
							<a
								href={mailto}
								class="text-foreground/90 underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
							>
								{profile.email}
							</a>
						</li>
						<li>
							<Socials />
						</li>
						<li>
							<a
								href={profile.phoneHref}
								class="text-muted-foreground transition-colors hover:text-primary"
							>
								{profile.phone}
							</a>
						</li>
						<li
							class="flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
						>
							<span class="relative flex size-1.5">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"
								></span>
								<span class="relative inline-flex size-1.5 rounded-full bg-primary"></span>
							</span>
							Open to opportunities
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div
			class="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-5"
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
			<button
				type="button"
				onclick={toTop}
				class="group inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
				aria-label="Back to top"
			>
				Back to top
				<ArrowUp class="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
			</button>
		</div>
	</div>
</footer>
