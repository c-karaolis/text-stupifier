import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

function stupify(text: string): string {
	let stupified = '';
	for (let i = 0; i < text.length; i++) {
		if (i % 2 === 0) {
			stupified += text[i].toLowerCase();
		} else {
			stupified += text[i].toUpperCase();
		}
	}
	return stupified;
}

export const POST = (async ({ request }) => {
	const body = await request.json();
	const response = json(stupify(body.textToBeStupified), { status: 200 });
	return response;
}) satisfies RequestHandler;
