import { fetchAllCountries, fetchCountry } from "../api.js";
import { renderCountries } from "../components/cards.js";

export async function handleCountrySearch(inputId){
  const inputName = document.getElementById(inputId);

  inputName.addEventListener("input", async (event) => {
    const inputedName = event.target.value;

    try {
      let data;

      if (!inputedName || inputedName == ""){
        data = await fetchAllCountries();

      } else {
        data = await fetchCountry(inputedName);
      }

      renderCountries(data);
    } catch(e){
        console.error("Error fetching data by name", e)
    }
  })
}
