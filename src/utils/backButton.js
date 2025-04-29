export function goBackPage(selector) {
  const btn = document.querySelector(selector);

  try {
    
    if(!btn) {
      console.error("Button selector not found")
      return;
    }
    
    btn.addEventListener("click", () => {
      history.back();
    });
    

  } catch(e) {
    console.error("Error with back button", e);
  }
}
