<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { profile } from '$lib/data/cv.js';
	import { Mail, Menu, X } from '@lucide/svelte';

	const links = [
		{ href: '#experience', label: 'Experience', id: 'experience' },
		{ href: '#projects', label: 'Engagements', id: 'projects' },
		{ href: '#skills', label: 'Skills', id: 'skills' },
		{ href: '#credentials', label: 'Credentials', id: 'credentials' },
		{ href: '#writing', label: 'Writing', id: 'writing' }
	] as const;

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let active = $state('');
	let progress = $state(0);

	function onScroll() {
		const y = window.scrollY;
		scrolled = y > 8;
		const max = document.documentElement.scrollHeight - window.innerHeight;
		progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;

		// Lightweight scroll-spy: pick the last section whose top passed the header offset
		const ids = [...links.map((l) => l.id), 'contact'];
		let current = '';
		for (const id of ids) {
			const el = document.getElementById(id);
			if (el && el.getBoundingClientRect().top <= 120) current = id;
		}
		active = current;
		if (menuOpen && y > 40) menuOpen = false;
	}
</script>

<svelte:window onscroll={onScroll} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-colors duration-300 {scrolled || menuOpen
		? 'border-b border-border bg-background/85 backdrop-blur-md'
		: 'border-b border-transparent bg-background/40 backdrop-blur-sm'}"
>
	<div class="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:px-8">
		<a href="#top" class="group flex items-center gap-2" aria-label="Back to top">
			<span class="relative flex size-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"
				></span>
				<span class="relative inline-flex size-2 rounded-full bg-primary"></span>
			</span>
			<span class="font-mono text-[13px] font-semibold tracking-widest text-foreground uppercase">
				DKB<span class="text-primary">/</span>net
			</span>
		</a>

		<nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
			{#each links as link (link.href)}
				<a
					href={link.href}
					aria-current={active === link.id ? 'true' : undefined}
					class="relative font-mono text-[11px] tracking-widest uppercase transition-colors {active ===
					link.id
						? 'text-primary'
						: 'text-muted-foreground hover:text-foreground'} after:absolute after:-bottom-1.5 after:left-0 after:h-px after:transition-all after:duration-300 {active ===
					link.id
						? 'after:w-full after:bg-primary'
						: 'after:w-0 after:bg-primary hover:after:w-full'}"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<Button
				href="mailto:{profile.email}?subject=Connection%20via%20portfolio"
				size="sm"
				class="h-8 px-3 text-[13px]"
			>
				<Mail data-icon="inline-start" />
				<span class="max-sm:hidden">Get in touch</span>
				<span class="sm:hidden">Contact</span>
			</Button>
			<button
				type="button"
				class="inline-flex size-8 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground md:hidden"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				{#if menuOpen}
					<X class="size-4" />
				{:else}
					<Menu class="size-4" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Scroll progress: the "signal" line -->
	<div class="absolute inset-x-0 -bottom-px h-px bg-transparent" aria-hidden="true">
		<div
			class="h-full bg-primary transition-[width] duration-150"
			style="width: {progress * 100}%"
		></div>
	</div>

	{#if menuOpen}
		<nav
			class="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
			aria-label="Mobile"
		>
			<ul class="mx-auto max-w-6xl space-y-1 px-4 py-3">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							onclick={() => (menuOpen = false)}
							class="flex items-center justify-between rounded-md px-2 py-2 font-mono text-xs tracking-widest uppercase transition-colors {active ===
							link.id
								? 'bg-primary/10 text-primary'
								: 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
						>
							{link.label}
							<span class="text-[10px] opacity-60">→</span>
						</a>
					</li>
				{/each}
				<li>
					<a
						href="#contact"
						onclick={() => (menuOpen = false)}
						class="flex items-center justify-between rounded-md px-2 py-2 font-mono text-xs tracking-widest text-primary uppercase hover:bg-primary/10"
					>
						Contact
						<span class="text-[10px] opacity-60">→</span>
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>
