import { fetchAllCountries } from "./src/api.js";
import { renderCountries } from "./src/components/cards.js";
import { toggleDarkMode } from "./src/utils/darkMode.js";
import { handleCountrySearch } from "./src/utils/searchByName.js";
import { handleRegionSelect } from "./src/utils/selectByRegion.js";
import { goBackPage } from "./src/utils/backButton.js";

async function main() {
  try {
    toggleDarkMode("#dark-mode-toggle", "#main-container")
    goBackPage("#back-btn");
    const data = await fetchAllCountries();
    renderCountries(data);
    handleRegionSelect("regions-select");
    handleCountrySearch("search-input");
  } catch(error) {
    console.error("Mistakes were made in main:", error);
  }
}

main();
