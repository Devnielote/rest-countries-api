import { navigateTo } from "../router/router.js";

export function createCard(country){
  let card;

  if (!country) {
    const countryDetailsContainer = document.getElementById("single-country-container");
    countryDetailsContainer.innerHTML = "";
    const searchFilterContainer = document.getElementById("search-filter-container");
    searchFilterContainer.classList.remove("hidden");


    card = document.createElement("div");
    card.classList.add("country_card_container");

    //Card structure
    const cardInfo = document.createElement("section");
    cardInfo.classList.add("card_info")
    const cardTitle = document.createElement("h2");
    const cardPopulation = document.createElement("p");

    //Card content

    cardTitle.innerText = "Country not found";
    cardPopulation.innerText = "Try with another name"

    //Card render 
    cardInfo.append(cardTitle, cardPopulation);
    card.append(cardInfo)

  } else {
      const countryDetailsContainer = document.getElementById("single-country-container");
      countryDetailsContainer.innerHTML = "";
      const searchFilterContainer = document.getElementById("search-filter-container");
      searchFilterContainer.classList.remove("hidden");


      card = document.createElement("div");
      card.classList.add("country_card_container");

      card.addEventListener("click", () => {
        navigateTo(`/country/${country.name.common}`)
      });

      //Card structure
      const cardImg = document.createElement("img");
      const cardInfo = document.createElement("section");
      cardInfo.classList.add("card_info")
      const cardTitle = document.createElement("h2");
      const cardPopulation = document.createElement("p");
      const populationSpan = document.createElement("span")
      const cardRegion = document.createElement("p");
      const regionSpan = document.createElement("span")
      const cardCapital = document.createElement("p");
      const capitalSpan = document.createElement("span")

      //Card content

      cardImg.src = country.flags.png;
      cardTitle.innerText = country.name.common;
      cardPopulation.innerText = "Population: "
      populationSpan.innerText = country.population.toLocaleString(); 
      cardPopulation.append(populationSpan);
      cardRegion.innerText = "Region: " 
      regionSpan.innerText = country.region; 
      cardRegion.append(regionSpan);
      if (country.capital == undefined) {
      capitalSpan.innerText = "No capital"
    } else {
      capitalSpan.innerText = country.capital;
    }
      cardCapital.innerText = "Capital: ";
      cardCapital.append(capitalSpan);

      //Card render 
      cardInfo.append(cardTitle, cardPopulation, cardRegion, cardCapital);
      card.append(cardImg, cardInfo);
  }

  return card;
}
