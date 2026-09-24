<script lang="ts">
	import SectionHeading from './section-heading.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { reveal } from '$lib/attachments/reveal';
	import { profile, publications, type Post } from '$lib/data/cv.js';
	import { getPosts } from '$lib/data/posts.remote.js';
	import { ArrowUpRight, PenLine } from '@lucide/svelte';
</script>

<section id="writing" class="scroll-mt-16 border-t border-border bg-card/40">
	<div class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
		<SectionHeading
			index="05"
			kicker="Bylines"
			title="Writes like an engineer."
			note="Technical articles that translate networking and web concepts into plain, useful language — published on dev.to."
		/>

		<!-- One list rendering shared by all three states: live, cached, offline. -->
		{#snippet bylines(items: Post[], label: string)}
			<ol class="divide-y divide-border border-y border-border">
				{#each items as post, i (post.url)}
					<li class="group" {@attach reveal(i * 60)}>
						<a
							href={post.url}
							target="_blank"
							rel="noopener"
							class="flex items-baseline gap-4 py-4 transition-colors hover:text-foreground md:gap-6 md:py-5"
						>
							<span class="font-mono text-xs text-primary tabular-nums">
								{String(i + 1).padStart(2, '0')}
							</span>
							<span class="min-w-0 flex-1">
								<span
									class="font-display text-lg leading-snug font-medium transition-transform duration-300 group-hover:translate-x-1.5 md:text-xl"
								>
									{post.title}
								</span>
								{#if post.description}
									<span class="mt-1 block text-sm text-muted-foreground">
										{post.description}
									</span>
								{/if}
								<span class="mt-2 flex flex-wrap items-center gap-2">
									<time
										datetime={post.date}
										class="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
									>
										{post.readableDate}
									</time>
									{#if post.readingMinutes > 0}
										<span class="font-mono text-[11px] text-muted-foreground/60">
											· {post.readingMinutes} min read
										</span>
									{/if}
									{#each post.tags.slice(0, 3) as tag (tag)}
										<Badge
											variant="outline"
											class="h-5 px-2 font-mono text-[10px] tracking-wider text-primary uppercase"
										>
											{tag}
										</Badge>
									{/each}
								</span>
							</span>
							<span
								class="flex shrink-0 items-center gap-1 self-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase opacity-0 transition-opacity duration-300 group-hover:text-primary group-hover:opacity-100 max-md:hidden"
							>
								Read
								<ArrowUpRight class="size-3.5" />
							</span>
							<PenLine
								class="size-4 shrink-0 self-center text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:text-primary group-hover:opacity-100 md:hidden"
							/>
						</a>
					</li>
				{/each}
			</ol>

			<div class="mt-5 flex flex-wrap items-center justify-between gap-3">
				<p class="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
					{label}
				</p>
				<a
					href={profile.devto}
					target="_blank"
					rel="noopener"
					class="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-primary uppercase"
				>
					All articles on dev.to
					<ArrowUpRight
						class="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					/>
				</a>
			</div>
		{/snippet}

		<!--
			{#await} renders only its pending branch during SSR, so the page streams
			out immediately instead of blocking on the dev.to fetch. The remote query
			dedupes per request and caches server-side — no $effect needed.
		-->
		{#await getPosts()}
			<div
				class="divide-y divide-border border-y border-border"
				role="status"
				aria-live="polite"
				aria-busy="true"
			>
				{#each [0, 1, 2, 3] as i (i)}
					<div class="flex items-baseline gap-4 py-4 md:gap-6 md:py-5">
						<div class="h-3 w-6 animate-pulse rounded-md bg-muted"></div>
						<div class="min-w-0 flex-1 space-y-2">
							<div class="h-4 w-3/4 animate-pulse rounded-md bg-muted"></div>
							<div class="h-3 w-1/3 animate-pulse rounded-md bg-muted"></div>
						</div>
					</div>
				{/each}
			</div>
			<p class="mt-5 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
				Tuning the feed…
			</p>
		{:then feed}
			{@render bylines(
				feed.posts,
				feed.source === 'devto' ? `Live from dev.to/${profile.devtoUsername}` : 'Archived bylines'
			)}
		{:catch}
			<!-- Transport failure only (offline) — API errors already fall back server-side. -->
			{@render bylines(publications, 'Archived bylines')}
		{/await}
	</div>
</section>
