import { createCard } from "./CountryCard.js";

export function renderCountries(data) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  container.classList.remove("hidden");

  try {
    if (Array.isArray(data)){
      data.forEach(country => {
        const card = createCard(country)
        container.append(card);
      });
      
    } else {
      const card = createCard(data);
      container.append(card);
    }
  } catch(e) {
    console.error("Error rendering country cards", e)
  }
};
