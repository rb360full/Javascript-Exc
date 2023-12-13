const themes = document.querySelector(".themes");

function changeTheme(e) {
    const color = e.target.dataset.color;
    document.documentElement.style.setProperty("--theme-color", color);
}

themes.addEventListener("click", changeTheme);
