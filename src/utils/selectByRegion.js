import { fetchAllCountries, fetchCountriesByRegion } from "../api.js";
import { renderCards } from "../components/cards.js";

export async function handleRegionSelect(selectId){
  const selectRegion = document.getElementById(selectId);

  selectRegion.addEventListener("change", async (event) => {
    const selectedRegion = event.target.value;

    try {

      let data;

      if(!selectedRegion){
        data = await fetchAllCountries();

      } else {
        data = await fetchCountriesByRegion(selectedRegion);

      }

      renderCards(data);

    } catch(e){
      console.error("Error fetching data by region: ", e);
    }

  });
}
