export function toggleDarkMode(btn, container) {
  const toggleBtn = document.querySelector(btn);
  const mainContainer = document.querySelector(container);
  const icon = toggleBtn.querySelector("ion-icon"); 
  console.log(icon);

  toggleBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("dark_mode")
    const isDark = mainContainer.classList.contains("dark_mode");
    icon.setAttribute("name", isDark ? "moon": "moon-outline");
  });
}
