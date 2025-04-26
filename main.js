import { fetchAllCards, fetchCardByName } from "./src/api.js";
import { renderCards, renderCardInfo } from "./src/components/cards.js";
import { toggleDarkMode } from "./src/utils/darkMode.js";

async function main() {
  try {
    toggleDarkMode("#dark-mode-toggle", "#main-container")
    const data = await fetchAllCards();
    renderCards(data);
    const countryData = await fetchCardByName("germany");
    renderCardInfo(countryData);
  } catch(error) {
    console.error("Mistakes were made in main:", error);
  }
}

main();
