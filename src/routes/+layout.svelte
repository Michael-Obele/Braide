<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/site/nav.svelte';
	import { browser, dev } from '$app/environment';
	import { Agentation, type AnnotationProps } from 'sv-agentation';

	let playgroundAnnotationProps: AnnotationProps = {
		toolbarPosition: 'bottom-left',
		outputMode: 'detailed',
		pauseAnimations: true,
		clearOnCopy: true,
		includeComponentContext: false,
		includeComputedStyles: false
	};

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Damiete Braide — Network Solutions Engineer</title>
	<meta property="og:title" content="Damiete Braide — Network Solutions Engineer" />
	<meta
		property="og:description"
		content="Enterprise WLAN design, SD-WAN, cloud-managed campus networks, and Huawei-certified presales expertise."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-svh">
	<a
		href="#experience"
		class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
	>
		Skip to content
	</a>
	<Nav />
	<main>
		{@render children()}
	</main>
</div>

{#if browser && dev}
	<Agentation {...playgroundAnnotationProps} />
{/if}
