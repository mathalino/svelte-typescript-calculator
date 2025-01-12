import { json } from '@sveltejs/kit';



export async function POST({ request }) {
  const { state, consoleValue, total } = await request.json();
  let totalValue = total;
  switch (state) {
    case 'add':
        totalValue += parseInt(consoleValue);
      break;
    case 'subtract':
        totalValue -= parseInt(consoleValue);
        break;
    case 'multiply':
        totalValue *= parseInt(consoleValue);
        break;
    case 'divide':
        totalValue /= parseInt(consoleValue);
        break;
    }
    return json({ totalValue });
}

// yawa