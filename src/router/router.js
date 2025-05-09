import { renderHomePage } from "../pages/HomePage.js";
import { renderCountryPage } from "../pages/CountryPage.js";
import { renderRegionPage } from "../pages/RegionPage.js";
import { renderCountrySearch } from "../pages/CountrySearch.js";

export function navigateTo(url) {
  history.pushState(null, null, url);
  handleRoute()
  requestAnimationFrame(() => {
    window.scrollTo(0,0);
  })
};

export function handleRoute() {
  const path = window.location.pathname;

  if (path === "/" || path === "/index.html") {
    renderHomePage();

  } else if (path.startsWith("/country/")) {
    const countryName = path.split("/country/")[1];
    renderCountryPage(countryName); 
    
  } else if (path.startsWith("/region/")) {
    const regionName = decodeURIComponent(path.split("/region/")[1]);
    renderRegionPage(regionName);

  } else if (path.startsWith("/search/")) {
    const searchQuery = decodeURIComponent(path.split("/search/")[1]);
    renderCountrySearch(searchQuery);

  } else {
    renderNotFoundPage();
  }

}

window.addEventListener("popstate", handleRoute);

