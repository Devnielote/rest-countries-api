import { fetchCountry } from "../api.js";
import { renderCountries } from "../components/CountryList.js";

export async function renderCountrySearch(query) {
  const data = await fetchCountry(query);
  renderCountries(data);
  requestAnimationFrame(() => {
    window.scrollTo(0,300);
  })
};
