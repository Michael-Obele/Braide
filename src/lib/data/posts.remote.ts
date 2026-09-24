import { query } from '$app/server';
import { profile, publications, type Post } from '$lib/data/cv.js';

/** How long fresh dev.to results stay valid in memory. */
const CACHE_MS = 10 * 60 * 1000;

interface DevtoArticle {
	title: string;
	description: string;
	url: string;
	published_at: string;
	readable_publish_date: string;
	reading_time_minutes: number;
	tag_list: string[];
}

export interface PostsFeed {
	posts: Post[];
	source: 'devto' | 'fallback';
}

/** Module-level cache so repeated calls in a window hit dev.to at most once. */
let cache: { at: number; feed: PostsFeed } | null = null;

function normalize(a: DevtoArticle): Post {
	return {
		title: a.title,
		description: a.description ?? '',
		url: a.url,
		date: a.published_at,
		readableDate: a.readable_publish_date,
		readingMinutes: a.reading_time_minutes ?? 0,
		tags: Array.isArray(a.tag_list) ? a.tag_list : []
	};
}

/**
 * Latest dev.to posts for `profile.devtoUsername`, newest first.
 *
 * Runs on the server but is called from the Writing section itself, so the
 * dev.to fetch never blocks the initial page render — the section shows a
 * skeleton until the query resolves. Served from a 10-minute in-memory cache;
 * on any failure the static `publications` fallback keeps the section populated.
 */
export const getPosts = query(async (): Promise<PostsFeed> => {
	if (cache && Date.now() - cache.at < CACHE_MS) {
		return cache.feed;
	}

	try {
		const res = await fetch(
			`https://dev.to/api/articles?username=${profile.devtoUsername}&per_page=12`,
			{ headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(6000) }
		);
		if (!res.ok) throw new Error(`dev.to responded ${res.status}`);

		const raw = (await res.json()) as DevtoArticle[];
		if (!Array.isArray(raw) || raw.length === 0) throw new Error('dev.to returned no articles');

		const feed: PostsFeed = {
			posts: raw.map(normalize).sort((a, b) => b.date.localeCompare(a.date)),
			source: 'devto'
		};
		cache = { at: Date.now(), feed };
		return feed;
	} catch {
		// Offline, rate-limited, or API change — fall back to the curated list.
		const feed: PostsFeed = { posts: [...publications], source: 'fallback' };
		cache = { at: Date.now(), feed };
		return feed;
	}
});
