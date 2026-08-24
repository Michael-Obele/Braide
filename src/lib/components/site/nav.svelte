<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { profile } from '$lib/data/cv.js';
	import { Mail } from '@lucide/svelte';

	const links = [
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Engagements' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#credentials', label: 'Credentials' },
		{ href: '#writing', label: 'Writing' }
	] as const;

	let scrolled = $state(false);

	const headerClass = $derived(
		scrolled
			? 'fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md transition-colors duration-300'
			: 'fixed inset-x-0 top-0 z-50 bg-transparent transition-colors duration-300'
	);

	function onScroll() {
		scrolled = window.scrollY > 12;
	}
</script>

<svelte:window onscroll={onScroll} />

<header class={headerClass}>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
		<a href="#top" class="group flex items-center gap-2.5" aria-label="Back to top">
			<span class="relative flex size-2.5">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"
				></span>
				<span class="relative inline-flex size-2.5 rounded-full bg-primary"></span>
			</span>
			<span class="font-mono text-sm font-semibold tracking-widest text-foreground uppercase">
				DKB<span class="text-primary">/</span>net
			</span>
		</a>

		<nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<Button href="mailto:{profile.email}?subject=Connection%20via%20portfolio" size="sm">
			<Mail data-icon="inline-start" />
			Get in touch
		</Button>
	</div>
</header>
