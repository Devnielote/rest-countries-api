export function toggleDarkMode(btn, container) {
  const toggleBtn = document.querySelector(btn);
  const mainContainer = document.querySelector(container);
  const icon = toggleBtn.querySelector("ion-icon"); 

  toggleBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("dark_mode")
    const isDark = mainContainer.classList.contains("dark_mode");
    document.body.style.backgroundColor = isDark ? "hsl(207,26%,17%)": "white"
    icon.setAttribute("name", isDark ? "moon": "moon-outline");
  });
}
