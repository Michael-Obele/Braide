export const prerender = false;
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export async function GET() {
	const p = resolve('static/Damiete-Braide-CV.pdf');
	try {
		const txt = readFileSync(p, 'utf-8');
		return new Response(txt, {
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'Cache-Control': 'public, max-age=3600'
			}
		});
	} catch {
		return new Response('CV text not found', { status: 404 });
	}
}
