export function renderCards(data) {
  
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  console.log("Data recibida en cards", data)

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
    cardTitle.innerText = country.name;
    cardPopulation.innerText = "Population: "
    populationSpan.innerText = country.population.toLocaleString(); 
    cardPopulation.append(populationSpan);
    cardRegion.innerText = "Region: " 
    regionSpan.innerText = country.population; 
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
