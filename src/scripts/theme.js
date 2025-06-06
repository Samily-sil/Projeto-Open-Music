export function applyTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  const savedTheme = localStorage.getItem("@openMusic:theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeIcon.src = "./src/assets/icons/sun-icon.svg";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    themeIcon.src = isDark 
      ? "./src/assets/icons/sun-icon.svg" 
      : "./src/assets/icons/moon-icon.svg";

    localStorage.setItem("@openMusic:theme", isDark ? "dark" : "light");
  });
}

