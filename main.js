import { fetchAllCards, fetchCardByName } from "./src/api.js";
import { renderCards, renderCardInfo } from "./src/components/cards.js";

async function main() {
  try {
    const data = await fetchAllCards();
    renderCards(data);
  } catch(error) {
    console.error("Mistakes were made in main:", error);
  }

  const data = await fetchCardByName("mexico")
  renderCardInfo(data);
}

main();
