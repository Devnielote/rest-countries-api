import { fetchAllCards } from "./src/api.js";
import { renderCards } from "./src/components/cards.js";

async function main() {
  try {
    const data = await fetchAllCards();
    renderCards(data);
  } catch(error) {
    console.error("Mistakes were made in main:", error);
  }
}

main();
