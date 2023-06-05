import { json } from '@sveltejs/kit';

let total = 0;

export async function POST({ request }) {
  const { state, consoleValue } = await request.json();
  switch (state) {
    case 'add':
      total += parseInt(consoleValue);
      break;
    case 'subtract':
        total -= parseInt(consoleValue);
        break;
    case 'multiply':
        total *= parseInt(consoleValue);
        break;
    case 'divide':
        total /= parseInt(consoleValue);
        break;
    default:
        total = parseInt(consoleValue);
        break;
    }
  
    return json({ total });
}