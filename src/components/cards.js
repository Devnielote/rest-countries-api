export function renderCards(data) {
  
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  data.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("country_card_container");

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
    cardCapital.innerText = "Capital: ";
    capitalSpan.innerText = country.capital;
    cardCapital.append(capitalSpan);

    //Card render 
    cardInfo.append(cardTitle, cardPopulation, cardRegion, cardCapital);
    card.append(cardImg, cardInfo);
    container.append(card);
  });
}

export function renderCardInfo(data) {
  const cleanContainer = document.getElementById("cards-container");
  cleanContainer.innerHTML = "";
  const container = document.getElementById("single-country-container");

  //Card structure
  const card = document.createElement("div");
  const img = document.createElement("img");

    //Main card containers
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("section");
  const cardInfoGeneral = document.createElement("div")
  const cardInfoFirstColumn = document.createElement("div");
  const cardInfoSecondColumn = document.createElement("div");
  const cardInfoBorders = document.createElement("footer");

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
  const borders = data.borders;

  //Card info render first column
  cardImg.src = data.flags.svg;
  cardTitle.innerText = data.name.common;

  cardName.innerText = "Native Name:";
  cardNameSpan.innerText = data.name.nativeName.eng;
  cardName.append(cardNameSpan);

  cardPopulation.innerText = "Population:";
  cardPopulationSpan.innerText = data.population;
  cardPopulation.append(cardPopulationSpan);

  cardRegion.innerText = "Region:";
  cardRegionSpan.innerText = data.region
  cardRegion.append(cardRegionSpan);

  cardSubregion.innerText = "Sub Region:";
  cardSubregionSpan.innerText = data.subregion;
  cardSubregion.append(cardSubregionSpan);

  cardCapital.innerText = "Capital:";
  cardCapitalSpan.innerText = data.capital;
  cardCapital.append(cardCapitalSpan);

  cardInfoFirstColumn.append(cardName, cardPopulation, cardRegion, cardSubregion, cardCapital);

  cardInfoGeneral.append(cardInfoFirstColumn);

  //Card info render second column

  cardDomain.innerText = "Top Level Domain:";
  cardDomainSpan.innerText = data.tld;
  cardDomain.append(cardDomainSpan);

  cardCurrencies.innerText = "Currencies:";
  cardCurenciesSpan.innerText = data.currencies;
  cardCurrencies.append(cardCurenciesSpan);

  cardLang.innerText = "Languages:";
  cardLangSpan.innerText = data.languages;
  cardLang.append(cardLangSpan);

  cardInfoSecondColumn.append(cardDomain, cardCurrencies, cardLang);
  cardInfoGeneral.append(cardInfoSecondColumn);
  

  //Card info border render
  borders.forEach((border) => {
    const borderNameContainer = document.createElement("div");
    borderNameContainer.innerText = border;
    cardBordersContainer.append(borderNameContainer);
  })

  borderContainerTitle.innerText = "Border Countries:";
  cardInfoBorders.append(borderContainerTitle, cardBordersContainer);
  
  //Card setup
  cardInfo.append(cardTitle,cardInfoGeneral, cardInfoBorders);
  card.append(img,cardInfo);

  container.append(card);
}
