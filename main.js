import { fetchAllCards, fetchCardByName, fetchDataByCode, fetchDataByRegion } from "./src/api.js";
import { renderCards, renderCardInfo } from "./src/components/cards.js";
import { toggleDarkMode } from "./src/utils/darkMode.js";

async function main() {
  try {
    toggleDarkMode("#dark-mode-toggle", "#main-container")
    const data = await fetchAllCards();
    const dataByRegion = await fetchDataByRegion("america");
    renderCards(dataByRegion);
  } catch(error) {
    console.error("Mistakes were made in main:", error);
  }
}

main();
