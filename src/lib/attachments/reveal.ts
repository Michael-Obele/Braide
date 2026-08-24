import type { Attachment } from 'svelte/attachments';

/**
 * Scroll-reveal attachment. Adds `.reveal` immediately and `.is-visible`
 * once the element enters the viewport (one-shot).
 *
 * Usage: `<div {@attach reveal(120)}>…</div>`
 */
export function reveal(delayMs = 0): Attachment<HTMLElement> {
	return (node) => {
		// Skip animation entirely for users who prefer reduced motion —
		// the CSS also guards, but we avoid observing at all.
		if (
			typeof matchMedia === 'function' &&
			matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		node.classList.add('reveal');
		if (delayMs > 0) node.style.transitionDelay = `${delayMs}ms`;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						node.classList.add('is-visible');
						observer.disconnect();
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
		);

		observer.observe(node);

		return () => {
			observer.disconnect();
			node.classList.remove('reveal', 'is-visible');
			node.style.transitionDelay = '';
		};
	};
}
