import { navigateTo } from "../router/router.js";
import { createBackButton } from "./BackButton.js";

export function renderCountryDetails(data) {

  const cleanContainer = document.getElementById("cards-container");
  cleanContainer.innerHTML = "";
  const container = document.getElementById("single-country-container");
  container.innerHTML =  "";
  createBackButton(container);

  const {
    name:{common, nativeName},
    capital,
    flags,
    population,
    region,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = data;

  const nativeCountryName = Object.values(nativeName)[0].common;
  const countryCurrencyName = Object.values(currencies)[0].name;
  const countryLanguage = Object.values(languages)[0];
  const formattedPopulation = population.toLocaleString();


  const searchFilterContainer = document.getElementById("search-filter-container"); 

  //Card structure
  const card = document.createElement("div");
  card.classList.add("single_country_card");

    //Main card containers
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("section");
  cardInfo.classList.add("card_info_container")
  const cardInfoGeneral = document.createElement("div")
  cardInfoGeneral.classList.add("card_info")
  const cardInfoFirstColumn = document.createElement("div");
  cardInfoFirstColumn.classList.add("info_first_column")
  const cardInfoSecondColumn = document.createElement("div");
  cardInfoSecondColumn.classList.add("info_second_column")
  const cardInfoBorders = document.createElement("footer");
  cardInfoBorders.classList.add("borders_container");

  //Card content containers
  const cardTitle = document.createElement("h2");

  //Card first column content containers
  const cardName = document.createElement("p");
  const cardNameSpan = document.createElement("span");
  const cardPopulation = document.createElement("p");
  const cardPopulationSpan = document.createElement("span");
  const cardRegion = document.createElement("p");
  const cardRegionSpan = document.createElement("span");
  const cardSubregion = document.createElement("p");
  const cardSubregionSpan = document.createElement("span");
  const cardCapital = document.createElement("p");
  const cardCapitalSpan = document.createElement("span");

  // Card second column content containers
  const cardDomain = document.createElement("p");
  const cardDomainSpan = document.createElement("span");
  const cardCurrencies = document.createElement("p");
  const cardCurenciesSpan = document.createElement("span");
  const cardLang = document.createElement("p");
  const cardLangSpan = document.createElement("span");

  //Card border content containers
  const cardBordersContainer = document.createElement("div");
  const borderContainerTitle = document.createElement("h2");
  const countryBorders = borders;

  //Card info render first column
  cardImg.src = flags.png; 
  cardImg.alt = flags.alt;
  cardTitle.innerText = common;

  cardName.innerText = "Native Name: ";
  cardNameSpan.innerText = nativeCountryName;
  cardName.append(cardNameSpan);

  cardPopulation.innerText = "Population: ";
  cardPopulationSpan.innerText = formattedPopulation;
  cardPopulation.append(cardPopulationSpan);

  cardRegion.innerText = "Region: ";
  cardRegionSpan.innerText = region;
  cardRegion.append(cardRegionSpan);

  cardSubregion.innerText = "Sub Region: ";
  cardSubregionSpan.innerText = subregion;
  cardSubregion.append(cardSubregionSpan);

  cardCapital.innerText = "Capital: ";


  if (capital == undefined){
    cardCapitalSpan.innerText = "No capital"
  } else {
    cardCapitalSpan.innerText = capital;
  }

  cardCapital.append(cardCapitalSpan);

  cardInfoFirstColumn.append(cardName, cardPopulation, cardRegion, cardSubregion, cardCapital);

  cardInfoGeneral.append(cardInfoFirstColumn);

  //Card info render second column

  cardDomain.innerText = "Top Level Domain: ";
  cardDomainSpan.innerText = tld;
  cardDomain.append(cardDomainSpan);

  cardCurrencies.innerText = "Currencies: ";
  cardCurenciesSpan.innerText = countryCurrencyName;
  cardCurrencies.append(cardCurenciesSpan);

  cardLang.innerText = "Languages: ";
  cardLangSpan.innerText = countryLanguage;
  cardLang.append(cardLangSpan);

  cardInfoSecondColumn.append(cardDomain, cardCurrencies, cardLang);
  cardInfoGeneral.append(cardInfoSecondColumn);
  

  //Card info border render

  if(!countryBorders) {
    const borderNameBtn = document.createElement("button");
    borderNameBtn.classList.add("border_btn");
    borderNameBtn.innerText = "No borders";
    cardBordersContainer.append(borderNameBtn);
  } else {
      countryBorders.forEach((border) => {
      const borderNameBtn = document.createElement("button");
      borderNameBtn.classList.add("border_btn");
      borderNameBtn.innerText = border;
      borderNameBtn.addEventListener("click", () => {
        navigateTo(`/country/${decodeURIComponent(border)}`);
      })
      cardBordersContainer.append(borderNameBtn);
    })
  };

  borderContainerTitle.innerText = "Border Countries: ";
  cardInfoBorders.append(borderContainerTitle, cardBordersContainer);
  
  //Layout setup
  searchFilterContainer.classList.add("hidden")
  cardInfo.append(cardTitle,cardInfoGeneral, cardInfoBorders);
  card.append(cardImg,cardInfo);

  container.append(card);
};
