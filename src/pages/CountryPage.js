import { fetchCountry } from "../api.js";
import { renderCountryDetails } from "../components/CountryDetails.js";

export async function renderCountryPage(country){
  const countryData = await fetchCountry(country);
  renderCountryDetails(countryData);
  requestAnimationFrame(() => {
    window.scrollTo(0,0);
  })
};
