import { json } from '@sveltejs/kit';

let total = 0;

export async function POST({ request }) {
  const { state, consoleValue } = await request.json();
  switch (state) {
    case 'add':
      total += parseFloat(consoleValue);
      break;
    case 'subtract':
        total -= parseFloat(consoleValue);
        break;
    case 'multiply':
        total *= parseFloat(consoleValue);
        break;
    case 'divide':
        total /= parseFloat(consoleValue);
        break;
    default:
        total = parseFloat(consoleValue);
        break;
    }
  
    return json({ total });
}