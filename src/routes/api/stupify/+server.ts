import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

function stupify(text: string): string {
	let stupified = '';
	let whiteSpace = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === ' ') {
			stupified += ' ';
			whiteSpace++;
		} else if ((i-whiteSpace) % 2 === 0) {
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
