const contextMenu = document.getElementById("contextMenu");
document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.left = `${e.pageX}px`;
});

document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        contextMenu.style.display = "none";
    }
});

document.body.addEventListener("click", (e) => {
    contextMenu.style.display = "none";
});
