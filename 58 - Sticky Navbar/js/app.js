// define elements
const mainNav = document.getElementById("mainNav");
const img = document.querySelector("img");

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        mainNav.classList.add("bg-black", "txt-white");
        img.style.height = "64px";
    } else {
        mainNav.classList.remove("bg-black", "txt-white");
        img.style.height = "84px";
    }
});
