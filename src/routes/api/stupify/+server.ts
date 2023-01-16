import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

function stupify(text: string): string {
	let stupified = '';
	let whiteSpace = true;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === ' ') {
			stupified += ' ';
			whiteSpace = true;
		} else if (whiteSpace) {
			stupified += text[i].toLowerCase();

			whiteSpace = false;
		} else if (!whiteSpace) {
			stupified += text[i].toUpperCase();

			whiteSpace = true;
		}
	}
	return stupified;
}

export const POST = (async ({ request }) => {
	const body = await request.json();
	const response = json(stupify(body.textToBeStupified), { status: 200 });
	return response;
}) satisfies RequestHandler;
