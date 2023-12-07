const body = document.body;
const switchElement = document.querySelector(".switch");

document.addEventListener("DOMContentLoaded", function () {
  let currentTheme = localStorage.getItem("theme");
  body.classList.add(currentTheme);
});

switchElement.addEventListener("click", function () {
  // Hint: Add 'dark' class to body :))

  let currentTheme = localStorage.getItem("theme");

  if (currentTheme == "light" || currentTheme == null) {
    localStorage.setItem("theme", "dark");
    body.classList.toggle("dark");
  } else if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
    body.classList.toggle("dark");
  }
});
