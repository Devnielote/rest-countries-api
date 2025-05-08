import { handleRoute } from "./src/router/router.js";
import { handleRegionSelect } from "./src/utils/selectByRegion.js";
import { handleCountrySearch } from "./src/utils/searchByName.js";

async function main() {
  try {
    handleRoute();
    handleRegionSelect("regions-select");
    handleCountrySearch("search-input");

  } catch(error) {
    console.error("Mistakes were made in main:", error);
  }
}

main();
