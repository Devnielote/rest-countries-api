import { navigateTo } from "../router/router.js";

export async function handleRegionSelect(selectId){
  const selectRegion = document.getElementById(selectId);

  console.log(selectRegion.value);

  selectRegion.addEventListener("change", async (event) => {
    const selectedRegion = event.target.value;

    try {
      if(!selectedRegion || selectedRegion == ""){
        navigateTo("/");

      } else {
        const regionName = decodeURIComponent(selectedRegion);
        navigateTo(`/region/${regionName}`);
      }

    } catch(e){
      console.error("Error fetching data by region: ", e);
    }

  });
}
