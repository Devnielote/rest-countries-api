import { fetchAllCountries } from "./src/api.js";
import { renderCards } from "./src/components/cards.js";
import { toggleDarkMode } from "./src/utils/darkMode.js";
import { handleRegionSelect } from "./src/utils/selectByRegion.js";

async function main() {
  try {
    toggleDarkMode("#dark-mode-toggle", "#main-container")
    const data = await fetchAllCountries();
    renderCards(data);
    handleRegionSelect("regions-select");
  } catch(error) {
    console.error("Mistakes were made in main:", error);
  }
}

main();
