import { renderCountries } from "../components/CountryList.js";
import { fetchCountriesByRegion } from "../api.js";

export async function renderRegionPage(regionName) {
  const data = await fetchCountriesByRegion(regionName);
  renderCountries(data);
  requestAnimationFrame(() => {
    window.scrollTo(0,300);
  })
};
