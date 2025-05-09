import { fetchCountry, fetchCountryByCode } from "../api.js";
import { renderCountryDetails } from "../components/CountryDetails.js";

export async function renderCountryPage(country){
  let countryData;

  if(country.length > 3){
    countryData = await fetchCountry(country);
  } else {
    countryData = await fetchCountryByCode(country);
  }

  renderCountryDetails(countryData);

  requestAnimationFrame(() => {
    window.scrollTo(0,0);
  })
};
