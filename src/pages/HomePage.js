import { fetchAllCountries } from "../api.js";
import { renderCountries } from "../components/CountryList.js";

export async function renderHomePage() {
  const countries = await fetchAllCountries();
  renderCountries(countries);
  requestAnimationFrame(() => {
    window.scrollTo(0,0);
  })
};

