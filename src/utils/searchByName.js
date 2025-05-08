import { navigateTo } from "../router/router.js";

export function handleCountrySearch(inputId){
  const inputName = document.getElementById(inputId);

  inputName.addEventListener("keydown", async (event) => {
    if(event.key === "Enter"){
      const inputedName = event.target.value.toLowerCase()

      try {
        if (!inputedName || inputedName == ""){
          navigateTo("/");

        } else {
          history.pushState(null,null,"/")
          navigateTo(`search/${inputedName}`);
        }

      } catch(e){
        console.error("Error fetching countries by name", e)
      }
    }
  })
}
