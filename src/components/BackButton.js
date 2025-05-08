import { goBack } from "../utils/handleGoBack.js";

export function createBackButton(container){
  try {

    if(!container){
      throw new Error("Button container " + container)

    } else {
      const btnElement = document.createElement("button");
      btnElement.classList.add("back_btn");
      btnElement.innerText = "Go Back";
      btnElement.addEventListener("click", () => {
        history.back();
      })
      container.append(btnElement);
    }

  }catch(e){
    console.error("Error rendering the back button in a country details page", e);
  }
}
